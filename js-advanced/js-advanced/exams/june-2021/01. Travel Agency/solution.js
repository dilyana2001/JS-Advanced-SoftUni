window.addEventListener('load', solution);

function solution() {
    document.querySelector('#form #submitBTN').addEventListener('click', submitInfoHandler);

    function submitInfoHandler(e) {
        const [fname, email, phone, address, code] = document.querySelectorAll('#form div input');

        if (!fname.value || !email.value) {
            return;
        }
        if (e.target.disabled == false) {
            e.target.disabled = true;
        }

        document.querySelector('#infoPreview').appendChild(
            createPreviewInformation(fname.value, email.value, phone.value, address.value, code.value)
        );

        document.getElementById('editBTN').disabled = false;
        document.getElementById('editBTN').addEventListener('click', editBtnHandler);

        document.getElementById('continueBTN').disabled = false;
        document.getElementById('continueBTN').addEventListener('click', continueBtnHandler);

        fname.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        code.value = '';
    }

    function editBtnHandler(e) {
        const [fnamePreview, emailPreview, phonePreview, addressPreview, codePreview] = e.target.parentNode.parentNode.querySelector('#infoPreview').querySelectorAll('li');
        const [fname, email, phone, address, code] = document.querySelectorAll('#form div input');

        fname.value = fnamePreview.textContent.split(': ')[1];
        email.value = emailPreview.textContent.split(': ')[1];
        phone.value = phonePreview.textContent.split(': ')[1];
        address.value = addressPreview.textContent.split(': ')[1];
        code.value = codePreview.textContent.split(': ')[1];

        const lis = e.target.parentNode.parentNode.querySelector('#infoPreview').querySelectorAll('li')
        for (const li of lis) {
            li.remove();
        }
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = true;
        document.querySelector('#submitBTN').disabled = false;
    }


    function continueBtnHandler(e) {
        const lis = e.target.parentNode.parentNode.querySelector('#infoPreview').querySelectorAll('li')
        for (const li of lis) {
            li.remove();
        }
        e.target.disabled = true;
        e.target.previousElementSibling.disabled = true;
        document.querySelector('#submitBTN').disabled = false;
    }

    function createPreviewInformation(fname, email, phone, address, code) {
        const fragment = document.createDocumentFragment();

        const fnameList = document.createElement('li');
        const emailList = document.createElement('li');
        const phoneList = document.createElement('li');
        const addressList = document.createElement('li');
        const codeList = document.createElement('li');

        fnameList.textContent = `Full Name: ${fname}`;
        emailList.textContent = `Email: ${email}`;
        phoneList.textContent = `Phone Number: ${phone}`;
        addressList.textContent = `Address: ${address}`;
        codeList.textContent = `Postal Code: ${code}`;

        fragment.appendChild(fnameList);
        fragment.appendChild(emailList);
        fragment.appendChild(phoneList);
        fragment.appendChild(addressList);
        fragment.appendChild(codeList);

        return fragment;
    }
}