import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  EditorContainer,
  LeftContainer,
  Heading,
  Image,
  RightContainer,
  ButtonsContainer,
  ListItem,
  Button,
  //   TextAreaContainer,
  TextArea,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
    content: '',
  }

  toggleBoldButton = () => {
    this.setState(prev => ({isBoldActive: !prev.isBoldActive}))
  }

  toggleItalicButton = () => {
    this.setState(prev => ({isItalicActive: !prev.isItalicActive}))
  }

  toggleUnderlineButton = () => {
    this.setState(prev => ({isUnderlineActive: !prev.isUnderlineActive}))
  }

  changeContent = e => {
    this.setState({content: e.target.value})
  }

  render() {
    const {
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
      content,
    } = this.state
    return (
      <MainContainer>
        <EditorContainer>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ButtonsContainer>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.toggleBoldButton}
                  active={isBoldActive}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.toggleItalicButton}
                  active={isItalicActive}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.toggleUnderlineButton}
                  active={isUnderlineActive}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </ButtonsContainer>
            {/* <TextAreaContainer> */}
            <TextArea
              onChange={this.changeContent}
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderlineActive}
              value={content}
            >
              {content}
            </TextArea>
            {/* </TextAreaContainer> */}
          </RightContainer>
        </EditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
