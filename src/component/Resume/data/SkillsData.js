import htmlIcons from "./icons/html6.png";
import cssIcons from "./icons/css.png";
import jsIcons from "./icons/js6.png";
import reactIcons from "./icons/react6.png";
import reduxIcons from "./icons/redux.png";
import jestIcons from "./icons/jest.png";
import gitIcons from "./icons/git.png";
import fsdIcons from "./icons/fsd.png";
import tsIcons from "./icons/typescript.png";
const skills = [
  { name: "HTML", description: "HTML5 - это HTML5, добавить особо нечего. Я знаю его достаточно хорошо, чтобы не испытывать проблем при работе." , icon: htmlIcons},
  { name: "CSS", description: "В работе предпочитаю использовать SASS, так как он предоставляет более удобный и гибкий способ написания стилей. Кроме того, помимо создания стилей, я также умею создавать анимации с использованием CSS и JavaScript. Это позволяет оживить веб-страницы и добавить интерактивности. Еще одним из моих навыков является адаптивная веб-разработка. Я могу создать сайт, который будет хорошо отображаться и работать на различных устройствах, таких как компьютеры, планшеты и смартфоны. ", icon: cssIcons},
  { name: "JavaScript", description: "С JavaScript я хорошо знаком, работаю с новыми возможностями языка. Я прочитал много книг, получил много практического опыта и прошел курсы. Умею организовывать код и успешно применяю библиотеку React. Пока не успел попробовать Vue, но готов освоить его.", icon: jsIcons},
  { name: "React", description: "Умею эффективно организовывать компоненты React, использовать состояние и свойства для передачи данных, а также для взаимодействия с жизненным циклом компонентов. Так же применяю библиотеку React для управления состоянием приложения с помощью контекста и хуков.", icon: reactIcons },
  { name: "Redux", description: "С недавнего времени я начал изучать Redux. Изначально я не считал эту технологию необходимой, но постепенно мое мнение изменилось. Хотя я не применял Redux в коммерческих проектах, я практиковался с ним самостоятельно. Мой опыт работы с Redux доступен на моем GitHub профиле. Я убедился, что Redux - это мощная технология, которая может значительно упростить управление состоянием приложения и сделать его более предсказуемым. Я активно изучаю Redux и применяю его в своих проектах, чтобы создавать более эффективные и масштабируемые приложения. " , icon: reduxIcons},
  { name: "TypeScript", description: "Активно применяю возможности TypeScript, такие как статическая типизация, интерфейсы, дженерики и другие, для создания надежных и гибких приложений. Я убедился, что работа с TypeScript в команде значительно облегчает разработку. Кроме того, я хорошо знаком с различными порождающими, структурными и поведенческими паттернами. ", icon: tsIcons },
  { name: "Jest", description: "Мне не приходилось писать тесты в коммерческой разработке, но я также знаком с этой технологией. Без документации пока не обхожусь, мало практического опыта. В будущем я планирую освоить e2e и скриншотные тесты. ", icon: jestIcons},
  { name: "Git", description: "Я использовал Git при работе в команде из трех человек. Я умею писать основные команды, но обычно предпочитаю использовать GitHub Desktop, так как мне это удобнее. Что касается GitKraken и других приложений, я пока не имел опыта работы с ними. Готов продолжать углублять свои знания и навыки в работе с Git, чтобы быть более эффективным разработчиком.", icon: gitIcons},
  { name: "Future-sliced design", description: "Future-sliced design - это подход к проектированию, который акцентирует внимание на будущих потребностях и изменениях в проекте. Он предполагает разделение функциональности на небольшие, независимые модули, которые могут быть разработаны и внедрены постепенно. Вместо того, чтобы пытаться предугадать все возможные требования заранее, Future-sliced design позволяет создавать гибкие и масштабируемые системы, которые могут быть легко адаптированы к новым требованиям в будущем. Каждый модуль разрабатывается с учетом конкретной функциональности и может быть добавлен или изменен независимо от других модулей.", icon: fsdIcons},
  // Добавьте остальные навыки и их описания
];
export default skills;
