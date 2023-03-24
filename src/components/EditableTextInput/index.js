import {Component} from 'react'

import styled from 'styled-components'

export default class EditableTextInput extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  getText = e => {
    this.setState({text: e.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state
    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InLineBlock>
            {isEditable ? (
              <Input value={text} type="text" onChange={this.getText} />
            ) : (
              <Paragraph>{text}</Paragraph>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}> Save </Button>
            ) : (
              <Button onClick={this.changeStatus}> Edit </Button>
            )}
          </InLineBlock>
        </Container>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 250px;
  width: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h1``

const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 10px;
  border-radius: 10px;
`

const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border: 0;
  border-radius: 6px;
  padding: 12px;
  outline: none;
  cursor: pointer;
`

const InLineBlock = styled.div``

const Paragraph = styled.p`
  display: inline;
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
  margin-left: 10px;
`
