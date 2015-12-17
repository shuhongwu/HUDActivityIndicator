# HUDActivityIndicator
show activity with text and image,

#### How to use
##### HUDActivityIndicator require five params,they are:
>  showText : `Bool`
>  
>  ShowImage : `Bool`
>  
>  showTextAndImage :`Bool`
>  
>  textContent :`String` (usually with showText:true,the string which shows on the view)
>  
>  imageName :`String` (usually with showImage||showTextAndImage,the image which  aboved on textContent)


##### Example
Code: 

     /*
      show HUD,only with Text
     */
     _showHUDActivityIndicator: function() {
    if(this.state.isIndicatorAnimating){
      this._setToggleTimeout();
      return (
         <HUDActivityIndicator showText={true}
                               ShowImage={false}
                               showTextAndImage={false}
                               textContent={this.state.indicatorString}
                               imageName='' />
       );
     }else
     {
       return null;
     } 
     },
     
     
    
    
    /*
      perid time when HUD should disappear
    */
    _setToggleTimeout: function() {
    this.setTimeout(
      () => {
        this.setState({isIndicatorAnimating: !this.state.isIndicatorAnimating});
      },
      1200
    );
    },
