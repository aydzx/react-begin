import { useNavigate } from "react-router-dom";
import "./Home.scss";

export const Home = () => {
  const navigate = useNavigate();

  const onClickCounter = () => {
    navigate('/counter');
  };

  const onClickModal = () => {
    navigate('/modal');
  };

  const onClickQuiz = () => {
    navigate('/quiz');
  };

  return (
    <>
      <div className="Home">
        <div>
        <h2>Choose one</h2>
        <button onClick={onClickCounter} className="counter">Counter</button>
        <button onClick={onClickModal} className="counter">Modal</button>
        <button onClick={onClickQuiz} className="counter">Quiz</button>
        <button onClick={() => {navigate('/users')}} className="counter">Users</button>
        </div>
      </div>
    </>
  )
}