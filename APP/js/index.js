const lang = getParam('lang');
const defaultLang = 'ja';
const supportedLangList = ['ja']
const cloudfrontUrl = 'https://xxxxxxxxxxxxx.cloudfront.net'

window.onload = function () {
	const useNodeJS = false;   // if you are not using a node server, set this value to false
	const defaultLiffId = '0000000000-xxxxxxxx';   // change the default LIFF value if you are not using a node server
	$(document).ready(function () {
		initializeLiff(defaultLiffId);
	});
}
function initializeLiff(myLiffId) {
	liff
		.init({
			liffId: myLiffId
		})
		.then(() => {
			if (!liff.isLoggedIn()) {
				liff.login();
			} else {
				// start to use LIFF's api
				// initializeApp();
				let jsonPath = ''
				if(supportedLangList.indexOf(lang) >= 0){
					jsonPath = 'lang/' + lang + '.json';
				} else {
					jsonPath = 'lang/'+ defaultLang + '.json';
				}
				let glot = new Glottologist();
				glot.import(jsonPath).then(() => {
					glot.render();
				});

				liff.getProfile().then(function (profile) {
					document.getElementById('displayNameField').textContent = profile.displayName;
					const profilePictureDiv = document.getElementById('profilePictureDiv');
					if (profilePictureDiv.firstElementChild) {
						profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
					}
					const img = document.createElement('img');
					if (!profile.pictureUrl) {
						img.src = `${cloudfrontUrl}/img/default.png`
					} else {
						img.src = profile.pictureUrl;
					}
					img.alt = 'Profile Picture';
					profilePictureDiv.appendChild(img);
                    document.getElementById('statusMessageField').textContent = profile.statusMessage;
                    $("body").css("display", "block");
				}).catch(function (error) {
					window.alert('Error getting profile: ' + error);
				});
			}
		})
		.catch((err) => {
			alert('err:' + err);
		});
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&").replace(/[()]/g, "");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}