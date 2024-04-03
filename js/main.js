function selectGame(element) {
        // 모든 프로젝트 요소의 opacity를 0.5로 설정
        var projects = document.querySelectorAll('.project');
        projects.forEach(function(project) {
            project.style.opacity = 0.5;
        });

        // 클릭된 이미지의 부모 요소(.project)의 opacity를 1로 설정
        element.style.opacity = 1;

        // 클릭된 이미지의 src 속성을 가져옴
        var imageSrc = element.querySelector('img').src;
        // 파일 이름을 추출
        var imageName = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);

        // gameDetails 객체에서 이미지 이름에 해당하는 정보를 가져옴
        var selectedGame = gameDetails[imageName];

        // 세부 정보를 화면에 표시
        document.querySelector('.detail-title h3').innerHTML = selectedGame.title;
        document.querySelector('.detail-desc').innerHTML = selectedGame.desc;
        document.querySelector('#selected-game source').src = selectedGame.video;
        document.querySelector('#github-link').href = selectedGame.gamelink
        document.querySelector('#youtube-link').href = selectedGame.youtubelink
        document.querySelector('#itch-link').href = selectedGame.itchlink
        document.querySelector('#github-link').style.display = selectedGame.displaygithub
        document.querySelector('#youtube-link').style.display = selectedGame.displayyoutube
        document.querySelector('#itch-link').style.display = selectedGame.displayitch
        // 비디오 재생을 위해 video 요소를 재로드
        var selectedVideo = document.getElementById('selected-game');
        selectedVideo.load();
    }

    var gameDetails = {
        "servetheburger.png":{
                                title: "Serve The Burger",
                                desc: "Falling objects, Casual <br> Under developement at the moment. (04.2024 ~)",
                                video: "./assets/videos/servetheburger_playvid.mp4",
                                githublink: "",
                                youtubelink: "",
                                itchlink: "",
                                displayyoutube: "none",
                                displaygithub: "none",
                                displayitch:"none"
                                },
        "cupup.png": {
                        title: "CUP: UP",
                        desc: "Platformer, Casual <br> Fly right by touching right side of screen and left by touching left side of screen.",
                        video: "./assets/videos/cupup_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-CupUp",
                        youtubelink: "https://youtu.be/9yt4wDL3_XU",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "koreanclass.png": {
                        title: "Korean Class",
                        desc: "Language game, Education. <br> Test your Korean playing 3 different levels.",
                        video: "./assets/videos/koreanclass_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-KoreanClass",
                        youtubelink: "https://youtu.be/-D6zc15y5lg",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "flyingbee.png": {
                        title: "Flying Bee",
                        desc: "Drag & Draw, Casual. <br> Collect as many nectars as possible, don't make bee collide with each other.",
                        video: "./assets/videos/flyingbee_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-FlyingBee",
                        youtubelink: "https://youtu.be/2davBpk-V1Q",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "fallingbugs.png": {
                        title: "Falling Bugs",
                        desc: "Avoiding falling objects, Casual. <br> Simply just keep moving not getting attacked by falling bugs.",
                        video: "./assets/videos/fallingbugs_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-FallingBugs",
                        youtubelink: "https://youtu.be/3CW9kmOAjD4",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "steporfall.png": {
                        title: "Step Or Fall",
                        desc: "Platformer, Casual. <br> Simply just keep going up not falling.",
                        video: "./assets/videos/steporfall_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity/StepOrFall",
                        youtubelink: "https://youtu.be/4sHcStqwOIs",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "journey.png": {
                        title: "Mr Flower's Journey for lost Seeds",
                        desc: "Platformer, Casual. <br> Collect all seeds in map and unlock next stage.",
                        video: "./assets/videos/journey_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-MrFlowersJourney",
                        youtubelink: "https://youtu.be/W5cn897WUss",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "fallcup.png": {
                        title: "FALLCUP",
                        desc: "Endless runner, Casual mobile. <br> Cup moves left and right when it collides at side, simply touch screen to keep flying not fall. Fruits give you energy.",
                        video: "./assets/videos/fallcup_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-FALLCUP",
                        youtubelink: "https://youtu.be/B0qsKCm2w0g",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "chased.png": {
                        title: "CHASED",
                        desc: "Endless runner, Casual <br> Run away from big flower monster chasing you behind avoiding red tiles.",
                        video: "./assets/videos/chased_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-CHASED",
                        youtubelink: "https://youtu.be/r-STpqLsJRY",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },
        "attackbug.png": {
                        title: "ATTACK! BUG!",
                        desc: "Top-down shooting, Casual <br> Shoot bugs that come out from up/down/right/left entrances.",
                        video: "./assets/videos/attackbug_playvid.mp4",
                        githublink: "https://github.com/margotlinne/Unity2D-ATTACKBUG",
                        youtubelink: "https://youtu.be/wU5VYDXhX0Y",
                        itchlink: "",
                        displayyoutube: "block",
                        displaygithub: "block",
                        displayitch:"none"
                        },


    };
    
    var totalDis = 0.0;

    function scrollProjects(direction) {
        if(totalDis <= 1|| totalDis >= 0){
            totalDis += direction;
            if(totalDis >= 1){
                totalDis = 1;
            }
            if(totalDis <= 0){
                totalDis = 0;
            }

            // 스크롤할 요소 선택
            var projectsContainer = document.querySelector('.projects');
            
            // 스크롤할 거리를 계산
            var scrollDistance = window.innerWidth * direction;
            
            // 스크롤할 거리만큼 요소를 스크롤
            projectsContainer.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
            
            // 좌우 화살표 버튼의 표시 여부를 결정
            var leftArrow = document.getElementById('left-arrow');
            var rightArrow = document.getElementById('right-arrow');
            
            if(totalDis === 1){
                leftArrow.style.opacity = '1';
                rightArrow.style.opacity = '0.5';
            }
            else if(totalDis === 0){
                leftArrow.style.opacity = '0.5';
                rightArrow.style.opacity = '1';
            }
            else{
                leftArrow.style.opacity = '1';
                rightArrow.style.opacity = '1';
            }
        }
        

    };
    