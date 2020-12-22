import React from 'react'
import './Car.css'
import PropTypes from 'prop-types'
import classes from './Car.css'

import withClass from "../hoc/withClass";
// import Radium from "radium";

//компонент
//чтобы улучшить производительность лучше использовать функциональные компоненты вместо классовых!
//Иерархия:
// 1 базовый класс и базовый компонент(наследуется от React компонента), а
// все что внутри должно быть функциональными компонентами
class Car extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef()
  }

  // //Жизненные циклы
  //
  // //1Синхронизация локальных state с входящими свойствами(редко встречается)
  // componentWillReceiveProps(nextProps) {
  //   console.log('Car componentWillReceiveProps', nextProps);
  // }
  //
  // //должен что-нибудь вернуть
  // //Сдесь можем оптимизировать приложение
  // // true - компонент должен изменится и мы должны его перерисовать
  // // false - не перерисовываем
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Car shouldComponentUpdate', nextProps, nextState);
  //   //Если в параметре name будет находится тоже самое состосние что и сейчас,
  //   //Тогда не изменяем компонент
  //   return nextProps.name.trim() !== this.props.name.trim() //не перерисовуем компонент при несоответствию пробелов
  // }
  //
  // // Здесь знаем что компонент будет изменен(готовимся к его изменению)
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Car componentWillUpdate', nextProps, nextState);
  // }
  //
  //
  //
  // // Компонент изменился
  // componentDidUpdate() {
  //   console.log('Car componentDidUpdate');
  // }
  //
  // // // Данный метод позволяет получить ещё не измененное DOM дерево до обновления
  // // getSnapshotBeforeUpdate(prevProps, prevState) {
  // //   console.log('Car getSnapshotBeforeUpdate')
  // // }
  //
  // // метод вызывается когда происходит разрушение нашего компонента и он удаляется с DOM дерева
  // componentWillUnmount() {
  //   console.log('Car componentWillUnmount')
  // }

  //референция
  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }


  render() {
    // // Происходит изменение
    // console.log('Car render')

    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push('classes.green')
    } else {
      inputClasses.push('classes.red')
    }

    if (this.props.name.length > 4) {
      inputClasses.push('classes.bold')
    }

    return(
      <React.Fragment>
        {/*{console.log(this)}*/}
        <h1>Car name: {this.props.name}</h1>
        <h3>{this.props.year}</h3>
        <input
          // Референция
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
        {/*{ this.props.children }*/}
        </React.Fragment>
    )
  }
}
// Валидирование типов данных с помощью 'prop-types'
Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car)