function lockedProfile() {
    let baseUrl = 'http://localhost:3030/';
    let mainTag = document.getElementById('main');

    fetch(`${baseUrl}jsonstore/advanced/profiles`)
        .then(res => res.json())
        .then(res => {
            Object.values(res).forEach(x => {
                let profileDiv = document.createElement('div');
                let profileImg = document.createElement('img');
                let ProfileLabelLock = document.createElement('label');
                let profileInputRadioLock = document.createElement('input');
                let ProfileLabelUnLock = document.createElement('label');
                let profileInputRadioUnLock = document.createElement('input');
                let firstBr = document.createElement('br');
                let firstHr = document.createElement('hr');
                let ProfileLabelName = document.createElement('label');
                let profileInputName = document.createElement('input');
                let profileHiddenDiv = document.createElement('div');
                let secondHr = document.createElement('hr');
                let ProfileLabelEmail = document.createElement('label');
                let profileInputEmail = document.createElement('input');
                let ProfileLabelAge = document.createElement('label');
                let profileInputAge = document.createElement('input');
                let buttonShowMore = document.createElement('button');

                profileDiv.setAttribute('class', 'profile');
                profileImg.setAttribute('src', './iconProfile2.png');
                profileImg.setAttribute('class', 'userIcon');
                ProfileLabelLock.textContent = `Lock`;
                profileInputRadioLock.setAttribute('type', 'radio');
                profileInputRadioLock.setAttribute('name', 'user1Locked');
                profileInputRadioLock.setAttribute('value', 'lock');
                profileInputRadioLock.checked = true;
                ProfileLabelUnLock.textContent = `Unlock`;
                profileInputRadioUnLock.setAttribute('type', 'radio');
                profileInputRadioUnLock.setAttribute('name', 'user1Locked');
                profileInputRadioUnLock.setAttribute('value', 'unlock');
                ProfileLabelName.textContent = `Username`;
                profileInputName.setAttribute('type', 'text');
                profileInputName.setAttribute('name', 'user1Username');
                profileInputName.setAttribute('value', x.username);
                profileInputName.disabled = true;
                profileInputName.readOnly = true;
                profileHiddenDiv.setAttribute('id', 'user1HiddenFields');
                ProfileLabelEmail.textContent = `Email:`;
                profileInputEmail.setAttribute('type', 'email');
                profileInputEmail.setAttribute('name', 'user1Email');
                profileInputEmail.setAttribute('value', '');
                profileInputEmail.disabled = true;
                profileInputEmail.readOnly = true;
                ProfileLabelAge.textContent = `Age:`;
                profileInputAge.setAttribute('type', 'email');
                profileInputAge.setAttribute('name', 'user1Age');
                profileInputAge.setAttribute('value', '');
                profileInputAge.disabled = true;
                profileInputAge.readOnly = true;
                buttonShowMore.textContent = `Show more`;

                mainTag.appendChild(profileDiv);
                profileDiv.appendChild(profileImg);
                profileDiv.appendChild(ProfileLabelLock);
                profileDiv.appendChild(profileInputRadioLock);
                profileDiv.appendChild(ProfileLabelUnLock);
                profileDiv.appendChild(profileInputRadioUnLock);
                profileDiv.appendChild(firstBr);
                profileDiv.appendChild(firstHr);
                profileDiv.appendChild(ProfileLabelName);
                profileDiv.appendChild(profileInputName);
                profileDiv.appendChild(profileHiddenDiv);
                profileHiddenDiv.appendChild(secondHr);
                profileHiddenDiv.appendChild(ProfileLabelEmail);
                profileHiddenDiv.appendChild(profileInputEmail);
                profileHiddenDiv.appendChild(ProfileLabelAge);
                profileHiddenDiv.appendChild(profileInputAge);
                profileDiv.appendChild(buttonShowMore);
                buttonShowMore.addEventListener('click', () => {
                    if (profileInputRadioUnLock.checked) {
                        profileHiddenDiv.setAttribute('id', '');
                        profileInputEmail.setAttribute('value', x.email);
                        profileInputAge.setAttribute('value', x.age);
                        if (buttonShowMore.textContent == `Show more`) {
                            buttonShowMore.textContent = `Hide it`;
                        } else {
                            profileHiddenDiv.setAttribute('id', 'user1HiddenFields');
                            buttonShowMore.textContent = `Show more`;
                        }
                    }
                })
            })
        })
}