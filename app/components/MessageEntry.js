let React = require('react-native');
let {
  View,
  Text,
  TextInput,
  TouchableHighlight
} = React;
let { style, colors } = require('../styles');

class AuthorEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  _onPress() {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View>
        <TextInput
          {...style('textInput')}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          />
        <TouchableHighlight
          onPress={() => this._onPress()}
          {...style('button')}
          underlayColor={colors.primaryHighlight}>
          <Text {...style('buttonLabel')}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AuthorEntry.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

module.exports = AuthorEntry;