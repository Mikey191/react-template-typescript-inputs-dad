Проект react-template-typescript. В нем будут рассмотренны типизация: Props, Event, Router, Hooks, Requests.
# ПЕРВАЯ ЧАСТЬ react-template-typescript-inputs-dad.

## Статическая типизация в React TypeScript предоставляет несколько преимуществ:
 1. Предотвращение ошибок на этапе компиляции.
 2. Улучшенная поддержка IDE. Полноценное использование автокомплита.
 3. Более читаемый и понятный код.
 4. Легкое рефакторинг и поддержка кодовой базы.
 5. Большая экосистема и поддержка.

### Автокомплит (или автозаполнение) - это функциональность, которая предлагает варианты завершения кода или предлагает доступные методы, свойства и переменные во время разработки. При использовании React с TypeScript автокомплит может быть особенно полезным, так как TypeScript предоставляет статическую типизацию, что позволяет IDE (интегрированной среде разработки) предлагать точные варианты автозаполнения на основе типов данных.

Когда вы пользуетесь автокомплитом при разработке React с использованием TypeScript, вы можете получить следующие преимущества:
 1. Предложение доступных методов и свойств: Автокомплит может предлагать доступные методы и свойства для компонентов React, основываясь на типах данных, определенных в TypeScript. Например, если у вас есть компонент с пропсами, автокомплит может предложить доступные свойства для этих пропсов.

 2. Проверка типов: TypeScript позволяет определить типы данных для компонентов, пропсов и состояний. При использовании автокомплита, IDE может предлагать только те методы и свойства, которые соответствуют определенным типам данных. Это помогает избежать ошибок типизации и облегчает разработку.

 3. Улучшенная производительность: Благодаря автокомплиту, разработчики могут быстрее находить нужные методы и свойства, что улучшает производительность и сокращает время разработки.

 4. Лучшая документация: Автокомплит может предлагать документацию и подсказки по использованию методов и свойств, что помогает разработчикам быстрее понять, как использовать различные функции и компоненты.

 5. Всегда знать какие поля есть у объекта.

### Синтетические события.
 React оборачивает события в синтетические события, чтобы обеспечить кроссбраузерность и упростить работу событий в React-компонентах. Синтетические события являются обертками над нативными браузерными событиями и предоставляют единый интерфейс для работы событий в разных браузерах.

 Синтетические события в React имеют такие же свойства и методы, как и нативные события, но с некоторыми дополнительными возможностями. Они позволяют легко обрабатывать события, делегировать их обработку на разные компоненты и управлять состоянием приложения.

 Для работы с синтетическими событиями в React вы можете использовать специальные атрибуты, такие как onClick, onChange, onSubmit и другие, чтобы определить обработчики событий в компонентах. В обработчиках событий вы можете получить доступ к событию и его свойствам, таким как target, currentTarget, preventDefault и другим.

 Для использования синтетических событий в React с TypeScript вам необходимо правильно типизировать обработчики событий. Вместо использования общего типа Event для событий, вы можете использовать более конкретные типы событий, такие как MouseEvent, ChangeEvent, FormEvent и другие, в зависимости от типа события, с которым вы работаете. 

### Например:
```
function inputHandler(event: InputEvent){
   event.target.value
   event.preventDefault()
   event.stopPropagation()
}
```
 Если мы типизируем event то сможем увидить нужные поля с помощью автокомплита.

 Для указания типов props в компоненте React с TypeScript вы можете использовать интерфейсы или типы. В интерфейсах вы можете определить ожидаемые свойства и их типы, а в типах вы можете использовать синтаксис записи типов. 

### Например:
```
interface UserListProps{
 users: IUser[];
 onClick: () => void;
 maxCount: number;
}
const userList: FunctionComponent = (props: UserListProps)
```

## Минимальная конфигурация для запуска пустого приложения.

 1. Установка node.js + npm
 2. Установка React TypeScript через терминал: npx create-react-app . --template typescript
 3. Команда для запуска в терминале: npm start
 4. В файле index.html очищаем все, кроме базовой структуры
 5. В папке src удаляем все файлы кроме index.tsx и App.tsx

Корректируем файлы:

### Файл index.tsx:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
```

### Файл App.tsx:
```
import React from 'react';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```
### Минимальная конфигурация для запуска пустого приложения готова.

## 1.	ПЕРВЫЙ КОМПОНЕНТ. ТИПИЗАЦИЯ PROPS. Interface CardProps.		
    1 . Создаем папку components.
    2 . Создадим в нем файл Card.tsx .
    3 . Разворачиваем компонент Card. Компонент будет принимать ширину width: const Card = ({width}).
    4 . TypeScript выдает ошибку: Binding element 'width' implicitly has an 'any' type.
    5 . Создадим интерфейс, в котором опишем, какие props будет ожидать наш компонент: interface CardProps{ width: string }.
    6 . Указываем, что объект который будет принимать карточка - это будет объект типа CardProps: const Card = ({width}: CardProps) =>{}.
    7 . Ширину передаем в инлайн стиль: <div style={{width}}></div>.
    8 . Добавим в стили серую рамку и высоту: <div style={{width, height, border: "1px solid gray"}}></div>.
    9 . Добавим высоту в пропсы: interface CardProps{ width: string; height: string;}.
    10.	Передаем параметром в карточку высоту: const Card = ({width, height}: CardProps).
    11.	Переходим в App.tsx и добавляем созданную карточку: <div className="App"><Card /></div>.
    12.	Автокомплит подсказывает, что у нас два обязательных пропса: width и height. Необязательными можно делать пропсы с помощью следующего синтаксиса: interface CardProps{ width?: string; height?: string;}. В таком случае, если один или несколько пропсов не переданы автокомплит ругаться не будет.
    13.	Поместим внутрь карточки кнопку, что бы поработать с children: <Card width='200px' height='200px'><button>Кнопка</button></Card>.
    14.	Есть несколько вариантов указания children в пропсах: 1. Можно указать children в интерфейсе. Эта переменая будет типа: children?: React.ReactChild | React.ReactNode и 2. Унаследовать интерфейс от React.PropsWithChildren.
    15.	Я выберу первый вариант: children?: React.ReactNode;
    16.	Добавим children в пропсы компонента и в блок div.
			
## 2.	React.FunctionComponent, React.FC.
    1 . У React есть специальный тип для функционального компонента: const Card: React.FunctionComponent. Так же можно записать кратко: const Card: React.FC.
    2 .	Теперь объявление пропсов нам нужно указать в дженерике, а FC импортировать в файл: const Card: FC<CardProps> = ({width, height, children}).
        ```
        В TypeScript дженерик представляет собой механизм, который позволяет создавать обобщенные типы или функции, которые могут работать с различными типами данных. Он позволяет создавать компоненты, которые могут быть параметризованы типами данных, чтобы обеспечить повторное использование кода и обеспечить безопасность типов.
        ```
    3 .	Добавим еще один пропс variant. Он будет указывать на стиль карточки.
    4 .	Для выбора вариантов для поля variant сделаем перечисление: 1. outline="outline" - когда карточка будет обведена и 2. primary="primary" - карточка с залитым фоном: export enum CardVariant { outline="outlined", primary="primary", }.
    5 .	Укажем тип variant в интерфейсе: variant: CardVariant;.
    6 .	Добавим реализацию пропса variant в блок: <div style={{width, height, border: variant === CardVariant.outline ? "1px solid gray" : "none", background: variant === CardVariant.primary ? "lightgray" : ""}}>.
    7 .	Добавим variant в файле App.jsx: <Card width='200px' height='200px' variant={CardVariant.outline}>
    8 .	Добавим в интерфейс для пропсов компонента функцию: onClick: () => void; Параметром эта функция ничего не принимает и ничего не возвращает поэтому указываем void.
    9 .	Добавляем функцию как пропс в компонент: const Card: FC<CardProps> = ({width, height, variant, onClick, children}).
    10.	Вешаем слушатель события на корневой div.
    11.	Переходим в App и передаем эту функцию в Card. При нажатии на карточку будем выводить в логи слово click: <Card onClick={() => console.log("click")} width="200px" height="200px" variant={CardVariant.outline}>.
    12.	Передадим в функцию в компоненте число: onClick: (num: number) => void;.
    13.	Сделаем внутри компонента состояние: const [state, setState] = useState(0);.
    14.	При вызове этой функции будем передавать стрелочную функцию и внутри нее вызывать onClick с параметром state: onClick={() => onClick(state)}.
    15.	Переходим в компонент App.jsx.
    16.	Передадим число в функцию и выведем его в лог: onClick={(num) => console.log("click", num)}.
    17.	Интересный момент: если мы хотим указать onClick как необязательный параметр (onClick?) в самой функции нам надо проверять, передается ли этот пропс: onClick={() => onClick && onClick(state)}.
			
## 3.	ТИПИЗАЦИЯ СОБЫТИЙ. MouseEvents, DragEvents, ChangeEvents.		
    1 .	Для типизации событий создадим отдельный компонент EventsExample.tsx.
    2 .	Разворачиваем компонент.
    3 .	Это будет функциональный компонент FC.
    4 .	В блок div добавим инпут и кнопку.
    5 .	Сделаем наш инпут управляемым. Объявляем состояние: value, setValue, по умолчанию пустая строка. Тип для состояния укажем как string.
    6 .	Передаем поле value в пропс value для инпута.
    7 .	Реализовываем слушатель события onChange для отслеживания изменения в инпуте. В событии onChange будем вызывать функцию changeHandler.
    8 .	Создаем функцию changeHandler которая параметром будет принимать event (e). В реакте этот event оборачивается в некоторую обертку, которая называется синтетик event, и если мы попытаемся обратиться к полям эвента, то мы не знаем к чему конкретно обращаться.
    9 .	Что бы посмотреть список полей с помощью автокомплита необходимо event'у указать тип React.ChangeEvent.
    10.	Реализуем onClick для кнопки. При нажатии на кнопку будет вызываться функция clickHandler.
    11.	Реализуем функцию clickHandler. Параметром эта функция будет принимать event, тип этого эвента будет React.MouseEvents.
    12.	Теперь нам доступны все поля event в обоих функциях.
    13.	Для более точного указания, какой event мы будем использовать в дженерике для эвента в changeHandler можно указать HTMLInputElement. После этого e.target будет иметь только те поля, с которыми работает только поле инпут.
    14.	В функции changeHandler с помощью функции setValue устанавливаем в value e.target.value .
    15.	Для функции clickHandler для эвента укажем тип в дженерике HTMLButtonElement.
    16.	Внутри clickHandlera value просто выведем в консоль.
    17.	Возвращаемся в компонент App. И добавляем компонент EventsExample.
    18.	Drag and drop. 
    19.	Создадим в компоненте EventsExample div style={{width:200, height:200, background: "red"}}.
    20.	Продублируем этот блок и добавим отступ сверху в 15px.
    21.	Задача состоит в том, чтобы менять цвет второго квадрата, когда на него перетаскивают первый.
    22.	На первый блок добавим пропс draggable. И теперь этот элемент можно переносить при зажатой ЛКМ.
    23.	Реализовать несколько слушателей события.
    24.	onDrag. Функцию слушатель назовем dragHandler.
    25.	Создадим функцию dragHandler.
    26.	Параметром она будет принимать event с типом DragEvent. Как дженерик указываем HTMLDivElement.
    27.	В логи выставим log о том, что мы элемент начали перемещать: console.log("DRAG").
    28.	Во втором квадрате будем вешать больше слушателей. Начнем со слушателя onDrop. Функцию назовем dropHandler.
    29.	Далее реализуем слушатель onDragLeave. С функцией leaveHandler.
    30.	Третий слушатель будет onDgarOver с функцией dragWithPreventHandler. Это слушатель который хэндлерит событие, когда мы находимся внутри нашего блока.
    31.	Создаем соответствующие функции. Начнем с dragOver.
    32.	Создаем функция dragWithPreventHandler. Евент в ней так же относится к типу DragEvent, как дженерик указываем div Element.
    33.	Предотвращаем действие браузера по умолчанию вызываем функцию preventDefault.
    34.	Создаем состояние которое будет меняться в зависимости от того, занесли мы в квадрат другой квадрат или нет. isDrag, setIsDrag по дефолту false. Тип состояния будет boolean.
    35.	В функции dragWithPreventHandler после preventDefault устанавливаем это состояние в true. Потому что этот хэндлер хватает именно перемещение во второй квадрат.
    36.	Следующая функция для реализации leaveHandler. В этой функции нам надо менять состояние на false. preventDefault в этой функции так же остается.
    37.	И последний слушатель - это слушатель onDrop. Реализуем функцию dropHandler. В случае, если мы на этот элемент закинули первый квадрат, нам нужно состояние сделать false.
    38.	Выведем в логи о том, что мы дропнули элемент: log("DROP").
    39.	Остается только визуально менять второй блок.
    40.	Цвет будет меняться, когда первый элемени перетащили на второй. делаем проверку во втором элементе: если idDrag=true, то цвет будет синим, если idDrag=false, квадрат будет красным.
			
## 4.	ТИПИЗАЦИЯ ХУКА useRef. НЕУПРАВЛЯЕМЫЙ КОМПОНЕНТ.		
    1 .	Для неуправляемого компонента воспользуемся хуком useRef(). Создадим переменную inputRef = useRef(). По умолчанию референс будет null.
    2 .	Указываем тип для хука <HTMLInputElement>.
    3 .	Создадим новый инпут для использования useRef: <input ref={inputRef} type="text" placeholder="Неуправляемый" />
    4 .	Перейдем к функции нажатия на кнопку. И выведем в логи значение из неуправляемого инпута: console.log("Неуправляемый: ", inputRef.current?.value);. current? потому что current может быть null.
			
        ```
        ? - это оператор optional cheining. 
        Если с бэкэнда может прилететь поле с пустым значением (null), что бы не было ошибки, когда мы пытаемся его получить, раньше запись для проверки на null могла выглядить следующим образом:
        const address = 
          user.info &&
          user.info.address &&
          user.info.address.street
        то теперь мы можем использовать следующий синтаксис:
        const address = user.info?.address?.street?
        В таком случае, при отсутствии поля вернется null.
        ```

## КОНЕЦ ПЕРВОЙ ЧАСТИ eact-template-typescript
