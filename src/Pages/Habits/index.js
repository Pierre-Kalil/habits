import { useState, useEffect } from "react";
import AddHabits from "../../components/AddHabits";
import Habit from "../../components/Habit";
import { useHabits } from "../../Providers/habits";
import Button from "../../components/Button";
import {
  Container,
  Content,
  ContainerButtons,
  ContainerHabits,
} from "./styles";
import HeaderLogged from "../../components/HeaderLogged";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import Footer from "../../components/Footer";
import HomeBackground from "../../components/BackgroundHome";

const Habits = () => {
  const { habits, loadHabits } = useHabits();
  const [addNewHabit, setAddNewHabit] = useState(0);

  useEffect(() => {
    loadHabits();
  }, [habits]);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <HeaderLogged />
      <HomeBackground />
      <Container>
        <h1>Hábitos</h1>
        <Content>
          <ContainerHabits>
            {habits.map((habit) => (
              <Habit key={habit.id} habit={habit}></Habit>
            ))}

            {addNewHabit ? (
              <AddHabits setAddNewHabit={setAddNewHabit} />
            ) : (
              <></>
            )}
          </ContainerHabits>
          <ContainerButtons>
            <Button
              onClick={() => {
                setAddNewHabit(1);
              }}
            >
              {" "}
              Criar hábito
            </Button>
          </ContainerButtons>
        </Content>
      </Container>
    </>
  );
};

export default Habits;
