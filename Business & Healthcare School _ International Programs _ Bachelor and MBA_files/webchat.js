var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};

function StudizzBotOpen()
{
  if (myTimer != null) {
    clearTimeout(myTimer);
  }

  if (studizzIframeOpened)
    return;

  var iframeContainer = document.getElementById('studizzbot_iframe_container');
  iframeContainer.innerHTML = '<span class="studizz-exitWebchat" aria-hidden="true">&times;</span><iframe class="studizz_iframe" frameborder="0" scrolling="no" style="margin: 0 !important;background-color:white;width:100%; height:100%;visibility:visible !important;" src="https://webchat.studizz.fr/view?vid=62a880a4d8a48c4cc9323343&token=' + studizz_token + '&&msg=I\x2520can\x2520help\x2521&page='+encodeURIComponent(window.location.href)+'"></iframe>';

  StudizzShow(iframeContainer);

  var studizz_exitWebchat = iframeContainer.querySelector('.studizz-exitWebchat');
  studizz_exitWebchat.addEventListener('click', StudizzCloseChatbotInterface);


  studizzIframeOpened = true;







  
    
          
                      }
function StudizzBotClose()
{
  var studizzbot_iframe_container = document.getElementById('studizzbot_iframe_container');
  studizzbot_iframe_container.innerHTML = '';

  studizzIframeOpened=false;

  StudizzHide(studizzbot_iframe_container);
}var studizz_iframe_container;
var studizzIframeOpened = false;

function StudizzCloseChatbotInterface (event)
{   
    StudizzBotClose();

    StudizzHide(studizz_croix);
    StudizzShow(studizz_icon);
    StudizzFadeIn(studizz_icon,10);
    StudizzBounceStop(studizz_icon);
    StudizzFadeOut(studizz_iframe_container,10);

    StudizzSetCookie("stdcid_"+studizz_token+"_close", "true", 5,null);

    event.stopPropagation();
}


function StudizzBotInit($id, showMessage)
{
    if ((studizz_token != 0) || ($id==""))
        return false;

    studizz_token = $id;

        var chatstyle = document.createElement('link');
    chatstyle.type = 'text/css';
    chatstyle.rel = 'stylesheet';
    
                chatstyle.href = "https://studizz-data.s3.eu-west-1.amazonaws.com/cdn/webchat.min.css";
    document.head.appendChild(chatstyle);

    var chatconfigstyle = document.createElement('link');
    chatconfigstyle.type = 'text/css';
    chatconfigstyle.rel = 'stylesheet';
    
    chatconfigstyle.href = "https://webchat.studizz.fr/webchat.config.css?token="+studizz_token+"&vid="+studizz_vid+"&page="+encodeURIComponent(window.location.href);
    
    
    
    document.head.appendChild(chatconfigstyle);

    chatconfigstyle.onload = function() 
    {
                
        var studizz_container = document.createElement('div');
        studizz_container.className = 'studizz-container';
        
                studizz_container.innerHTML = "<div id=\"studizz-bounce\" class=\"studizz-notBouncing\"><img class=\"studizz-icon\" alt=\"Studizz Bot\" title=\"Studizz Bot\" src=\"https://studizz-data.s3.eu-west-1.amazonaws.com/cdn/botbtn2low.png\"><div class=\"studizz-notif\">2</div></div><div class = \"studizz-exit studizz-hide\" ><img class = \"studizz-exitImg\" src=\"https://s3-eu-west-1.amazonaws.com/studizz-data/cdn/iframeclose.png\"></div><div id=\"studizz-bubbleContainer\" class=\"studizz-noclick\"><div id=\"studizz-pBulle\"></div><div id=\"studizz-sBulle\"></div><div class=\"studizz-message\"><img class = \"studizz-exitBubble\" style=\"border-radius: 0 80% 0 30%;width: 14px;height: 14px;float: right;cursor: pointer;pointer-events: auto;\" src=\"https://s3-eu-west-1.amazonaws.com/studizz-data/cdn/iframeclose.png\" /><div class=\"studizz-text\"> "+studizz_message+"</div></div></div></div>";
                
                studizz_iframe_container = document.createElement('div');
        studizz_iframe_container.id = "studizzbot_iframe_container";
        studizz_iframe_container.className = "studizzbot_iframe_class studizz-hide";
                        
        //studizz_notBouncing = document.querySelector('.studizz-notBouncing'); 
        //studizz_bouncing = document.querySelector('.studizz-bouncing');
        studizz_icon = studizz_container.querySelector('.studizz-icon');
        studizz_croix = studizz_container.querySelector('.studizz-exit');
        studizz_bubbleContainer = studizz_container.querySelector('#studizz-bubbleContainer');
        studizz_pB = studizz_container.querySelector('#studizz-pBulle');
        studizz_sB = studizz_container.querySelector('#studizz-sBulle');
        studizz_message = studizz_container.querySelector('.studizz-message');
        studizz_notif = studizz_container.querySelector('.studizz-notif');
        

        studizz_exitBubble = studizz_container.querySelector('.studizz-exitBubble');
        studizz_exitBubble.addEventListener('click', function (event)
        {
            StudizzFadeOut(studizz_pB,10);
            StudizzFadeOut(studizz_sB,10);
            StudizzFadeOut(studizz_message,10);
            
            clearTimeout(firstApparition);
            clearInterval(bulleApparition);

            StudizzHide(studizz_bubbleContainer);

            StudizzSetCookie("stdcid_"+studizz_token+"_bubble", "false", 120,null);

            event.stopPropagation();
        });



        
                                        
        
        studizz_icon.style.opacity = 0;
        studizz_pB.style.opacity = 0;
        studizz_sB.style.opacity = 0;
        studizz_notif.style.opacity = 0;
        studizz_message.style.opacity = 0;
        studizz_croix.style.opacity = 0;


                







        
        
        
        StudizzHide(studizz_croix);
        StudizzShow(studizz_icon);

                document.body.appendChild(studizz_container);
        document.body.appendChild(studizz_iframe_container);
        
                studizz_container.addEventListener('click', function (event)
        {
            StudizzBotOpen();
            event.stopPropagation();
        });

                
        function stopAnimation()
        {
            StudizzFadeIn(studizz_iframe_container,10);
            StudizzFadeOut(studizz_pB,10);
            StudizzFadeOut(studizz_sB,10);
            StudizzFadeOut(studizz_message,10);
            StudizzFadeOut(studizz_notif,50);

            clearTimeout(firstApparition);
            clearTimeout(notifFade);
            clearInterval(bulleApparition);

            clearInterval(bouncing);
            
            StudizzHide(studizz_icon);
            StudizzShow(studizz_croix);

            StudizzFadeIn(studizz_croix,10);
            StudizzBounceStop(studizz_icon);
            
           
            StudizzHide(studizz_bubbleContainer);

            StudizzDeleteCookie("stdcid_"+studizz_token+"_close");
        }


        studizz_icon.addEventListener('click', function (event)
        {    
        
            StudizzBotOpen();
            stopAnimation();
                        
            event.stopPropagation();
        });

        studizz_croix.addEventListener('click', StudizzCloseChatbotInterface);
        
        

        studizz_message.addEventListener('click', function (event)
        {
            StudizzFadeOut(studizz_notif);
            StudizzBotOpen();
            stopAnimation();

            event.stopPropagation();
        });

        studizz_pB.addEventListener('click', function (event)
        {
            StudizzFadeOut(studizz_notif);
            StudizzBotOpen();
            stopAnimation();

            event.stopPropagation();
        });

        studizz_sB.addEventListener('click', function (event)
        {
            StudizzFadeOut(studizz_notif);
            StudizzBotOpen();
            stopAnimation();

            event.stopPropagation();
        });

        studizz_notif.addEventListener('click', function (event)
        {
            StudizzFadeOut(studizz_notif);
            StudizzBotOpen();
            stopAnimation();

            event.stopPropagation();
        });

        var iconApparition = setTimeout("StudizzFadeIn(studizz_icon,10)", studizz_timeFadeIcon );
        
        if (showMessage)
        {
            var bubble = StudizzGetCookie("stdcid_"+studizz_token+"_bubble");
            if(bubble != "false"){
                var firstApparition = setTimeout("StudizzOpenCloseAlternate()", 0000);
                var bulleApparition = setInterval("StudizzOpenCloseAlternate()", studizz_timeIntervalBubbleApparition);
            }
            var notifFade = setTimeout("StudizzFadeIn(studizz_notif,10)", studizz_timeFadeNotif)
            
        }

                var bouncing = setInterval("StudizzBouncePlay()", studizz_timeIntervalBouncing);
        
                
        if (!isMobile.any())
        {
                    }
    }


    return true;
}

var studizz_token = 0;
var studizz_cid = 0;
var studizz_icon = null; 
var studizz_pB = null;
var studizz_sB = null; 
var studizz_message = null; 
var studizz_notif = null;
var_studizz_vid = null;
function StudizzFadeIn(element,speed)
{
    element.style.visibility = 'visible';    
    if(element.style.opacity < 1.1)
    {
        var op = 0.1; 
        var timer = setInterval(function () 
        {
            if (op >= 1)
            {
                clearInterval(timer);
            }

            //if (element.className=="studizz-icon")
              //console.log("icon");

            element.style.opacity = op;
            element.style.MozOpacity = op;

        //if (element.className == "studizz-icon")
            //console.log("icon");

            op += 0.1;
            //console.log(element,op);
        }, speed);
    }
    
    
}

function StudizzFadeOut(element,speed)
{

    if(element.style.opacity >= 1.1)
    {
        var op = 1;  // initial opacity
        var timer = setInterval(function () 
        {
            if (op <= 0.1)
            {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.MozOpacity = op;
            op -= 0.1;
        }, speed);
        
    }    
    element.style.visibility = 'hidden';
}


function StudizzBouncePlay() {
    var studizz_bouncing = document.getElementById('studizz-bounce')

    if(studizz_bouncing.className == 'studizz-notBouncing')
    {
        studizz_bouncing.className = 'studizz-bouncing';
        window.requestAnimationFrame(function(time) {
            window.requestAnimationFrame(function(time) {
                studizz_bouncing.className = 'studizz-bouncing';
            });
        });
        studizz_bouncing.className = 'studizz-notBouncing';

    }

    if(studizz_bouncing.className == 'studizz-bouncing')
    {
        studizz_bouncing.className = '';
        window.requestAnimationFrame(function(time) {
            window.requestAnimationFrame(function(time) {
                studizz_bouncing.className = 'studizz-bouncing';
            });

        });
    }
}








function StudizzBounceStop(element)
{ 
  element.style.webkitAnimationPlayState = "paused";
}
    function StudizzOpenBubble()
{
    
    setTimeout("StudizzFadeIn(studizz_pB,50)", 1000);
    setTimeout("StudizzFadeIn(studizz_sB,50)", 2000);
    setTimeout("StudizzFadeIn(studizz_message,50)", 3000);    
}function StudizzCloseBubble()
{
   setTimeout("StudizzFadeOut(studizz_message,50)", 1000);
   setTimeout("StudizzFadeOut(studizz_sB,50)",  2000);
   setTimeout("StudizzFadeOut(studizz_pB,50)", 3000);
   //setTimeout("StudizzOpen()", 30000);
}
function StudizzOpenCloseAlternate()
{

		setTimeout("StudizzOpenBubble()", studizz_timeDelayOpenBubble);
        setTimeout("StudizzCloseBubble()", studizz_timeDelayCloseBubble);
}        function StudizzShow(element)
{
    //element.style = "display:block!important";
        element.classList.remove('studizz-hide');
    element.classList.add('studizz-show');
}


function StudizzHide(element)
{
    element.classList.remove('studizz-show');
    element.classList.add('studizz-hide');
}



function StudizzSetCookie(cname, cvalue, exminutes,domain)
{
  var d = new Date();
  d.setTime(d.getTime() + (exminutes * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  var value = cname + "=" + cvalue + ";" + expires + ";path=/";
  if ((domain!=null) && (domain!="undefined"))
    value += ";secure=false;httpOnly=false;SameSite=None;domain="+domain;
  
  document.cookie = value;
}

function StudizzGetAllCookies()
{
  var getting = document.cookies.getAll();
}

function StudizzGetCookie(cname)
{
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++)
  {
    var c = ca[i];
    while (c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function StudizzDeleteCookie(cname)
{
  document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00.000Z;path=/";
}

function postClientInfos(components,callback)
{
	const Http = new XMLHttpRequest();
	const url='https://webchat.studizz.fr/tva?token='+studizz_token+'&vid='+studizz_vid;//&fp='+fingerprint;//+'&referer='+referer;
	Http.open("POST", url);

	Http.onreadystatechange = function() //(e) => 
	{
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200)
		{
		  	//console.log(Http.responseText);
		  	callback(JSON.parse(Http.responseText));
		}
	}

	Http.send(JSON.stringify(components));
}

function getClientInfos(callback)
{
	loadJS('https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/2.1.0/fingerprint2.js',function () 
		{
	  
	  if (window.requestIdleCallback) 
	  {
	      requestIdleCallback(function () 
	      {
	          Fingerprint2.get(function (components) 
	          {
	            //console.log(components) // an array of components: {key: ..., value: ...}

	            postClientInfos(components,callback);

	          });
	      })
	  } 
	  else 
	  {
	      setTimeout(function () 
	      {
	          Fingerprint2.get(function (components) 
	          {
	            //console.log(components) // an array of components: {key: ..., value: ...}
	            postClientInfos(components,callback);
	          });
	      }, 500)
	  }

	},document.body);
}
	
function getClientId()
{
	var client = new ClientJS(); // Create A New Client Object

	/*
	if( client.isMobile() ) { // Check For Mobile Device

		if( client.isMobileAndroid() ) { // Check For Android
			alert('We Got Us Some Android!');

		}else if( client.isMobileIOS() ){ // Check For iOS
			alert('We Got Us Some Apple iOS!');

		}else{
			alert('Unknown Mobile Device...');
		}
	}else{
		if( client.isJava() ) { // Check If Java Is Installed
  			alert('Java ' + client.getJavaVersion() ); // Get Java Version

		}else{
			alert('No Java Installed...');
		}
	}
	*/

	var value = "";
	var values = new Array();

	var canvasPrint = client.getCanvasPrint();
	//value += " | canvasPrint = " + canvasPrint;
	values.push({'key':'canvasPrint','value':canvasPrint});

	var ua = client.getBrowserData().ua;
	values.push({'key':'userAgent','value':ua});
	//value += "ua = " + ua;

	var userAgentLowerCase = client.getUserAgentLowerCase(); 
	value += " | userAgentLowerCase = " + userAgentLowerCase;
	values.push({'key':'userAgentLowerCase','value':userAgentLowerCase});
	
	var browser = client.getBrowser(); // Get Browser
	value += " | browser = "+ browser;
	values.push({'key':'browser','value':browser});


	var CPU = client.getCPU(); // Get CPU Architecture
	value += " | CPU = " + CPU;
	values.push({'key':'cpu','value':CPU});

	var fonts = client.getFonts(); // Get Fonts
	value += " | fonts = " + fonts;
	values.push({'key':'fonts','value':fonts});

	var plugins = client.getPlugins(); // Get Plugins
	value += " | plugins="+plugins;
	values.push({'key':'plugins','value':plugins});

	var screenPrint = client.getScreenPrint(); // Get Screen Print
	value += " | screenPrint="+screenPrint;
	values.push({'key':'screenPrint','value':screenPrint});

	var fingerprint = client.getCustomFingerprint(ua, canvasPrint, fonts,plugins);
	value += " | fingerprint = "+fingerprint;
	values.push({'key':'fingerprint','value':fingerprint});

	var referer = document.location;
	value += " | referer="+referer;
	values.push({'key':'referer','value':referer});

	//var fingerprint = client.getFingerprint(); // Calculate Device/Browser Fingerprint	
	console.log("value = "+value);

	console.log(values);

	alert("value="+value);

	const Http = new XMLHttpRequest();
	const url='/tva?token='+studizz_token+'&fp='+fingerprint+'&vid='+studizz_vid;//+'&referer='+referer;
	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = (e) => {
	  	console.log(Http.responseText)
	}
}




function StudizzGetParams(script_name) 
{
  // Find all script tags

  var scripts = document.getElementsByTagName("script");
  
  // Look through them trying to find ourselves

  for(var i=0; i<scripts.length; i++) {
    if(scripts[i].src.indexOf("/" + script_name) > -1) {
      // Get an array of key=value strings of params

      var pa = scripts[i].src.split("?").pop().split("&");

      // Split each key=value into array, the construct js object

      var p = {};
      for(var j=0; j<pa.length; j++) {
        var kv = pa[j].split("=");
        p[kv[0]] = kv[1];
      }
      return p;
    }
  }
  
  // No scripts match

  return {};
}

var isMobile = {
  Android: function ()
  {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function ()
  {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function ()
  {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function ()
  {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function ()
  {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function ()
  {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
var myTimer = null;


if ((typeof disableStudizzBot === 'undefined') || (disableStudizzBot == false))
{

  var params = StudizzGetParams("webchat.js");
  var token = "";

  if ((typeof params !== 'undefined') && (typeof params.token !== 'undefined'))
    token = params.token;
  else
    token = "5e84402575549a4e48428a5e";


  //----------------------------------------------------------
  // Config
  //----------------------------------------------------------  
  var studizz_timeFadeIcon = 2000;
  var studizz_timeDelayOpenBubble = 3000;
  var studizz_timeDelayCloseBubble = 12000;
  var studizz_timeFadeNotif = studizz_timeDelayCloseBubble + 15000;
  var studizz_timeIntervalBouncing = 15000;
  var studizz_timeIntervalBubbleApparition = 40000;
  
  studizz_message = "I can help!"; 
  
  //----------------------------------------------------------
  //
  //----------------------------------------------------------
    studizz_vid = StudizzGetCookie('stdvid');

        if ((studizz_vid==="undefined") || (studizz_vid===""))
    {
            studizz_vid = "62a880a4d8a48c4cc9323343";
            StudizzSetCookie('stdvid', studizz_vid, 3600 * 24 * 390,"studizz.fr");
    }
        
  /*getClientInfos(function(obj)
  {

      //getClientId()

   });*/


    
    
    var width = window.innerWidth-30-10;
    var height = window.innerHeight-15-10;

        var showMessage = true;
    
    if (document.body !== 'undefined' && document.body!=null)
        StudizzBotInit(token, showMessage);
    else
    {
        document.addEventListener("DOMContentLoaded", function(event) 
        {
            var container = document.getElementsByClassName('studizz-container');

            if ((container.length==0) || (container==null))
                StudizzBotInit(token, showMessage);

        });
    }
  //----------------------------------------------------------

}