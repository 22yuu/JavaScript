const $titleInput = document.querySelector('.title-input');
const $contentInput = document.querySelector('.content-input');
const $titleLength = document.querySelector('.current-title-length');
const $publishBtn = document.querySelector('.publish-button');
const $postForm = document.querySelector('.post-form');
const $goBack = document.querySelector('.go-back');

const $coverImage = document.querySelector('.cover-image');
const $imageUpload = document.querySelector('#cover-image-upload');
const $fileReUploadWrapper = document.querySelector('.file-re-upload-wrapper');
const $imageReUpload = document.querySelector('#cover-image-re-upload');

function checkInputLength({target}) {
    if(target.value && target.value.length > 30) {
        alert('30자를 초과한 제목을 입력할 수 없습니다.');
        return;
    }

    $titleLength.innerText = target.value.length;
};

function uploadImage(event) {
    const file = event.target.files[0];

    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
        $coverImage.src = event.target.result;
    }
    $coverImage.style.display= 'block';
    $fileReUploadWrapper.style.display = 'block';
}

async function postSubmit(event) {
    event.preventDefault();

    try {
        await fetch(`http://localhost:1234/posts`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                title: $titleInput.value,
                content: $contentInput.value,
                image: $coverImage.src,
                author: '새로운 유저',
                authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }),
        });

        window.location.assign('/post-list.html');
        
    } catch (error) {
        alert(error);
    }

}



$imageUpload.addEventListener('change', uploadImage);
$imageReUpload.addEventListener('change', uploadImage);

$titleInput.addEventListener('input', checkInputLength);
$postForm.addEventListener('submit', postSubmit);
$publishBtn.addEventListener('click', () => {
    $postForm.dispatchEvent(new Event('submit'));
});

$goBack.addEventListener('click', () => window.history.back(1));