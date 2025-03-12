// INFO: chatagores BUTTONS

const chatagoresButtons = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
};
const displayCategories = (Categories) => {
  const categoriesContainer = document.getElementById(
    "chatagoresButton-container"
  );
  for (const names of Categories) {
    const chatagoreDiv = document.createElement("span");
    chatagoreDiv.innerHTML = `
            <button class="bg-slate-200 hover:bg-slate-300 text-black duration-300 font-medium py-2 px-4 rounded">
            ${names.category}
            </button>
        `;
    categoriesContainer.append(chatagoreDiv);
  }
};

//INFO: VIDEOS API

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos-container");
  console.log(videos[0]);
  videos.forEach((video) => {
    const videoThamble = video.thumbnail;
    const videoTitle = video.title;
    const views = video.others.views;
    const profilePicture = video.authors[0].profile_picture;
    const profileName = video.authors[0].profile_name;
    const isVerified = video.authors[0].verified;
    const verified = `${isVerified ? '<img src="assets/images/verify.png" alt="Verified">' : ''}`
    const videoDiv = document.createElement("div");
    videoDiv.classList.add(
      "w-full",
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "dark:bg-gray-800",
      "dark:border-gray-700"
    );

    videoDiv.innerHTML = `
                    <div class="w-full hover:brightness-75 duration-300 cursor-pointer  overflow-hidden h-48" href="#">
                        <img loading="lazy" class="duration-200 hover:scale-105 h-full w-full object-cover rounded-t-lg" src="${videoThamble}" alt="product image" />
                    </div>
                    <div class="px-3 py-3">
                        <a href="#" class="flex items-center gap-2" >
                            <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                <img class="w-full object-cover" src="${profilePicture} " alt="">
                            </div>

                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                ${videoTitle}
                            </h5>
                        </a>
                        <div class="flex justify-between items-center mt-2.5 mb-5 ml-10">
                            <div class="flex items-center gap-2">
                                <p class="text-sm font-semibold text-gray-900 dark:text-white">
                                    ${profileName}
                                </p>
                                <div class="w-5">
                                   ${verified}
                                </div>
                            </div>
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                                ${views}
                            </span>
                        </div>

                    </div>
                </div> 

        `;
    videoContainer.append(videoDiv);
  });
};

chatagoresButtons();
