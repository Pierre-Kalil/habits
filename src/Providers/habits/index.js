import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (data, user) => {
    const {
      title,
      category,
      difficulty,
      frequency,
      achieved,
      how_much_achieved,
    } = data;
    console.log(user);
    axios.post(
      "https://kabit-api.herokuapp.com/habits/",
      {
        title: title,
        category: category,
        difficulty: difficulty,
        frequency: frequency,
        achieved: achieved,
        how_much_achieved: how_much_achieved,
        user: user,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
  };

  const updateHabit = (habit) => {
    axios.patch(
      `https://kabit-api.herokuapp.com/habits/${habit.id}/`,
      {
        achieved: true,
        how_much_achieved: "100",
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
  };

  const deleteHabit = (habit) => {
    axios.delete(`https://kabit-api.herokuapp.com/habits/${habit.id}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
  };

  const loadHabits = () => {
    axios
      .get("https://kabit-api.herokuapp.com/habits/personal/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      });
  };

  // useEffect(()=>{
  //     loadHabits();
  // },[])
  console.log(habits);
  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        addHabit,
        updateHabit,
        deleteHabit,
        loadHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits  = () => useContext(HabitsContext);
