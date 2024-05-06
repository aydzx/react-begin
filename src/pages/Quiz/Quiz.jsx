import { useState } from 'react';
import './Quiz.scss';
import { useNavigate } from 'react-router-dom';

// const questions = [
//   {
//     title: 'React - это ... ?',
//     variants: ['библиотека', 'фреймворк', 'приложение'],
//     correct: 0,
//   },
//   {
//     title: 'Компонент - это ... ',
//     variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
//     correct: 1,
//   },
//   {
//     title: 'Что такое JSX?',
//     variants: [
//       'Это простой HTML',
//       'Это функция',
//       'Это тот же HTML, но с возможностью выполнять JS-код',
//     ],
//     correct: 2,
//   },
// ];

const questions = [
  {
    title: 'Где Айдын?',
    variants: ['Гараж', 'Дом', 'Универ', 'Кампус'],
    correct: 1,
  },
  {
    title: 'Какая машина у моргенштерна?',
    variants: ['Мерседес', 'Мазерати', 'то, что я не знаю что такое'],
    correct: 2,
  },
  {
    title: 'Что такое доброта?',
    variants: [
      'Это когда ты написал код другому',
      'Это когда ты помог написать код',
      'Это когда ты купил себе шоколадку',
      'Это когда купил шоколадку и не сказал что ты купил шоколадку чтобы другие не захотели',
    ],
    correct: 3,
  },
  {
    title: 'Как пишется писать на английском?',
    variants: [
      'Whrite',
      'Write',
      'Rite',
      'Piss',
      'Pisyat\'',
    ],
    correct: 0,
  },
  {
    title: 'Кто друг Чебурека?',
    variants: [
      'Беляш',
      'Чебурашка',
      'Гена',
      'Таня',
      'Лера',
      'Хачапури',
      'Shi',
    ],
    correct: 0,
  },
  {
    title: 'Кто в мире еды?',
    variants: [
      'Гена',
      'Чебурешка',
      'Валерия Игоревна',
      'Чебурашка',
      'Валерия',
      'Лера',
    ],
    correct: 5,
  },
  {
    title: 'Угадайте кто это по звуку \'Бульк\'?',
    variants: [
      'Водяной',
      'Баба яга',
      'Дима',
      'Аватар ААнг',
      'Картошка',
    ],
    correct: 2,
  },
  {
    title: 'Что нужно делать если вы увидели 👌',
    variants: [
      'Бежать',
      'Закрыть глаза',
      'Сунуть в дырку',
      '👉',
      'Недовольно закатить глаза',
    ],
    correct: 3,
  },
];

function Result({correct, win}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} из {questions.length}</h2>
      <a href='/quiz'>
      <button>{win ? 'Маладес как солённый агурец!' : 'Попробовать снова'}</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percentage = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

export const Quiz = () => {
  const navigate = useNavigate();
  const [step,setStep] = useState(0);
  const [correct,setCorrect] = useState(0);
  const question = questions[step];
  // const win = false;


  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };


  return (
    <div className="Quiz">
      {
        step !== questions.length 
        ? <Game 
            step={step} 
            question={question} 
            onClickVariant={onClickVariant} 
          /> 
        : <Result correct={correct} win={correct === questions.length ? true : false}/>
      }
      <div className='result'>
      <button onClick={() => navigate('/')}>Назад</button>
      </div>
    </div>
  );
}