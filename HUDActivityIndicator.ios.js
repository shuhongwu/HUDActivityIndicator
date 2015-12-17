'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var icon_checked = require('image!right');


var {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
  Text,
  Image
} = React;


/**
 *        <ActivityIndicatorIOS
 *       size="large"
 *         color="black"
 *         style={styles.indicator}
 *       />
            <Text style={{fontSize:14, flexWrap:'nowrap'}}>加载中...</Text>
*/
var HUDActivityIndicator = React.createClass({

	propType: {
        style: View.propTypes.style,
    },

     getInitialState: function() {
     return {
      showText: false,//是否显示文字
      ShowImage: false,// 是否显示图片
      showTextAndImage: false,//是否图文并茂
      textContent:'',//显示的文字内容
      imageName:'',//显示图片名称
      };  
  },

  componentWillMount: function() {


  	  	if(this.props.showText){
            this.setState({
               showText: true,
               textContent: this.props.textContent,
            });
  	  	}else if (this.props.ShowImage)
  	  	{
            this.setState({
               ShowImage: true,
               imageName: this.props.imageName,
            }); 	  		
  	  	}else if (this.props.showTextAndImage)
  	  	{
            this.setState({
               showTextAndImage: true,
               textContent: this.props.textContent,
               imageName: this.props.imageName,
            }); 	  		  	  		
  	  	}else
  	  	{

  	  	} 

   },

   _renderTextView: function() {
      return (
        <View style={styles.hudCenter}>
        <View style = {styles.indicator}>
            <Text style={{fontSize:14, flexWrap:'nowrap',fontFamily:'Cochin'}}>{this.props.textContent}</Text>
        </View>
      </View>       
      );
  },

   _renderImageView: function() {
      return (
        <View style={styles.hudCenter}>
          <View style = {styles.indicator}>
            <Image style={{flexWrap:'nowrap'}} source={icon_checked}></Image>
           </View>
        </View>
    );
  },

   _renderTextAndImageView: function() {
      return (
        <View style={styles.hudCenter}>
        <View style = {styles.indicator}>
            <Image style={{flexWrap:'nowrap'}} source={icon_checked}></Image>
            <Text style={{fontSize:14, flexWrap:'nowrap'}}>{this.props.textContent}</Text>
        </View>
      </View>       
      );
  },

  render: function() {
  	
  	if (this.props.showText) {
      return this._renderTextView();
    }

    else if (this.props.ShowImage) {
      return this._renderImageView();
    }

    else if (this.props.showTextAndImage) {
      return this._renderTextAndImageView();
    }
    else {

    	return (
        <View style={styles.hudCenter}>
        <View style = {styles.indicator}>
            <Text style={{fontSize:14, flexWrap:'nowrap'}}>ViewDefault</Text>
        </View>
      </View>       
      );

    }

  },
});

var styles = StyleSheet.create({
  indicator: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  indicatorImage: {
  	position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hudCenter: {
    backgroundColor: 'transparent',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    top: 0,
  },
});

module.exports = HUDActivityIndicator;