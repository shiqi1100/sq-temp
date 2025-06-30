<template>
  <div class="demo-view-container">
    <div class="demo-view-header">
      <div class="flex items-center ml-[24px] cursor-pointer">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="#fff"
              d="M26.439 1.25c1.712 0 2.336.623 2.336 2.31v20.56c0 .265-.047.74-.133.944-.087.205-.167.371-.327.52-.164.153-.45.312-.587.375l-11.067 4.657a1.686 1.686 0 0 1-1.322 0L4.273 25.961a2.624 2.624 0 0 1-.586-.376c-.16-.149-.24-.315-.327-.519-.086-.203-.133-.68-.133-.944V3.56c0-1.687.624-2.31 2.336-2.31h20.875ZM11.845 26.07a.097.097 0 0 0-.029.019.096.096 0 0 0-.02.028.103.103 0 0 0-.007.035.09.09 0 0 0 .007.037.098.098 0 0 0 .049.046l4.007 1.7a.358.358 0 0 0 .28 0l4.038-1.7a.08.08 0 0 0 .028-.018.093.093 0 0 0 .02-.028.106.106 0 0 0 .007-.037.087.087 0 0 0-.027-.063.083.083 0 0 0-.063-.026H11.88a.089.089 0 0 0-.035.006ZM8.7 18.901c-.267 0-.516.046-.745.137-.23.092-.427.218-.593.38a1.79 1.79 0 0 0-.388.565c-.095.215-.141.45-.141.7v.011c0 .258.047.496.143.712.095.217.228.404.396.56.17.158.368.28.598.368.23.088.48.132.75.132.318 0 .602-.051.853-.152a2.54 2.54 0 0 0 .654-.378v-1.543H8.632v.698h.683v.416a.998.998 0 0 1-.554.141.992.992 0 0 1-.38-.07.874.874 0 0 1-.492-.498 1.03 1.03 0 0 1-.07-.382v-.01a.973.973 0 0 1 .257-.666.837.837 0 0 1 .629-.274c.172 0 .324.027.454.083.13.055.259.135.384.24l.565-.67a2.195 2.195 0 0 0-.612-.368 2.178 2.178 0 0 0-.796-.132Zm14.96.007a1.83 1.83 0 0 0-.561.081 1.281 1.281 0 0 0-.423.229.978.978 0 0 0-.268.347 1.054 1.054 0 0 0-.092.44v.012c0 .175.034.324.102.443.068.119.16.219.278.299.118.08.256.145.414.196.158.05.33.096.515.139.12.026.215.051.29.076.073.024.133.05.178.076a.254.254 0 0 1 .092.08c.016.027.025.06.025.096v.01a.193.193 0 0 1-.103.173.574.574 0 0 1-.293.062c-.404 0-.779-.138-1.125-.412l-.536.633c.215.189.463.33.742.425.278.095.573.142.883.142.212 0 .404-.024.576-.075.172-.051.319-.125.44-.22.123-.097.218-.214.286-.351.068-.137.102-.295.102-.471v-.01a.89.89 0 0 0-.09-.414.826.826 0 0 0-.257-.297 1.658 1.658 0 0 0-.41-.208 4.235 4.235 0 0 0-.537-.15 3.63 3.63 0 0 1-.294-.075 1.016 1.016 0 0 1-.184-.074.25.25 0 0 1-.095-.08.19.19 0 0 1-.027-.102v-.011c0-.062.03-.114.087-.156a.441.441 0 0 1 .26-.065c.155 0 .316.03.483.087.167.058.33.14.488.252l.48-.67a2.007 2.007 0 0 0-.63-.342 2.524 2.524 0 0 0-.797-.115Zm-13.127 3.486h1.012l.248-.614h1.338l.253.614h1.031l-1.477-3.455h-.927l-1.478 3.454Zm4.219 0h.941v-1.96l.883 1.332h.02l.887-1.342v1.97h.956v-3.43h-1.015l-.83 1.328-.826-1.327h-1.016v3.428Zm4.33 0h2.814v-.808h-1.863v-.544h1.665v-.75h-1.665v-.519h1.84v-.808h-2.791v3.428Zm-6.23-1.353h-.778l.39-.975.388.975Zm9.275-16.19c-1.42 0-2.123.695-2.123 2.101v7.305c0 1.406.703 2.1 2.124 2.1h.865c1.42 0 2.123-.695 2.123-2.1v-2.635h-1.715v2.554c0 .452-.212.662-.653.662h-.326c-.457 0-.67-.21-.67-.662V7.034c0-.453.212-.663.67-.663h.294c.44 0 .652.21.652.663v2.213h1.715v-2.31c0-1.406-.686-2.085-2.106-2.085h-.85Zm-15.21 11.41h3.919v-1.568H8.664v-3.409h2.058V9.717H8.664v-3.2h2.139V4.95H6.917v11.312Zm4.763 0h1.747v-4.105h.996c1.42 0 2.123-.694 2.123-2.1V7.05c0-1.407-.702-2.1-2.123-2.1H11.68v11.31ZM17.334 4.95v11.312h1.747V4.95h-1.747Zm-3.19 1.519c.441 0 .654.21.654.662v2.845c0 .452-.212.663-.653.663h-.718v-4.17h.718Z"
            ></path>
          </svg>
        </div>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
          <path
            fill="#fff"
            d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="ml-[24px] cursor-pointer">
        <a
          href="https://www.unrealengine.com/zh-CN/home"
          class="logo logo--has-icon hover: text-gray-50"
        >
          <img
            class="logo__img"
            fetchpriority="high"
            height="32"
            alt="虚幻引擎徽标"
            src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhrx3tsh07mzz3amnbyl"
            width="233"
          />
        </a>
      </div>
      <div class="flex items-center gap-[48px] ml-[24px]">
        <div class="flex items-center gap-[4px] cursor-pointer">
          <div class="text-[#fff] text-[14px]">概况</div>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#fff"
              d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="flex items-center gap-[4px] cursor-pointer">
          <div class="text-[#fff] text-[14px]">应用</div>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#fff"
              d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="flex items-center">
          <div class="text-[#fff] text-[14px] cursor-pointer">新闻</div>
        </div>
        <div class="flex items-center">
          <div class="text-[#fff] text-[14px] cursor-pointer">论坛</div>
        </div>
        <div class="flex items-center">
          <div class="text-[#fff] text-[14px] cursor-pointer">文档</div>
        </div>
        <div class="flex items-center gap-[4px] cursor-pointer">
          <div class="text-[#fff] text-[14px]">学习</div>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#fff"
              d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="flex items-center gap-[4px] cursor-pointer">
          <div class="text-[#fff] text-[14px]">更多</div>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#fff"
              d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <form autocomplete="off" role="search" class="search-form active prestine">
          <div class="search">
            <input
              class="search__input"
              id="search"
              inputmode="search"
              type="search"
              required=""
              aria-label="搜索虚幻引擎网站"
              placeholder="搜索"
            />
            <button class="search__submit" type="submit">
              <div aria-hidden="true" class="search__icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    fill="#fff"
                    d="M11.5 2.25a8.25 8.25 0 1 0 5.28 14.59l4.69 4.69a.75.75 0 1 0 1.06-1.06l-4.69-4.69A8.25 8.25 0 0 0 11.5 2.25M4.75 10.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <button class="search__close" type="reset" aria-label="关闭搜索">
              <span aria-hidden="true" class="icon-wrapper">
                <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#fff"
                    d="M4.47 4.47a.75.75 0 0 1 1.06 0L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1 0-1.06"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
      <div>
        <span aria-hidden="true" class="icon-wrapper cursor-pointer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#fff"
              d="M3.784 11.25H8.01c.065-2.256.423-4.31.985-5.869.166-.457.352-.882.561-1.263a8.26 8.26 0 0 0-5.773 7.132m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.146 0-.383.08-.695.444-.309.362-.62.93-.898 1.697-.494 1.368-.83 3.243-.896 5.359h4.978c-.066-2.116-.402-3.991-.896-5.36-.277-.766-.59-1.334-.898-1.696-.312-.364-.55-.444-.695-.444m3.99 7.5c-.066-2.256-.424-4.31-.986-5.869a9 9 0 0 0-.561-1.263 8.26 8.26 0 0 1 5.773 7.132zm-1.501 1.5H9.51c.065 2.116.402 3.991.896 5.36.277.766.59 1.334.898 1.696.312.364.55.444.695.444.146 0 .383-.08.695-.444.309-.362.62-.93.898-1.697.494-1.368.83-3.243.896-5.359m-.046 7.132a9 9 0 0 0 .56-1.263c.563-1.559.92-3.613.986-5.869h4.227a8.26 8.26 0 0 1-5.773 7.132m-4.886 0a9 9 0 0 1-.56-1.263c-.563-1.559-.92-3.613-.986-5.869H3.784a8.26 8.26 0 0 0 5.773 7.132"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div class="right-btn">
        <div class="login">
          <span>登录</span>
        </div>
        <div class="down">
          <span>下载</span>
        </div>
      </div>
    </div>
    <div class="demo-view-mian">
      <div class="relative">
        <div class="absolute z-20 left-0 w-[60%] h-[100%] flex flex-col gap-[20px] m-[40px]">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            src="https://cms-assets.unrealengine.com/AiKUh5PQCTaOFnmJDZJBfz/1apgNGiXQCy67NbFZw2R"
            style=" width: 270px;height: 37px; color: transparent; inset: 0; object-fit: contain"
          />
          <div class="text-[64px] text-[#fff] font-bold leading-none">我们制作引擎</div>
          <div class="text-[64px] text-[#fff] font-bold leading-none">而你将让它变得虚幻。</div>
          <div class="text-[18px] text-[#fff]">
            虚幻引擎来自开发者，为了开发者，为所有人提供公平的条款。因为每个有想法的人都值得使用世界上最开放、最先进的实时创作工具来实现自己的想法。
          </div>
          <div class="flex items-center gap-[12px] right-btn">
            <div class="down !w-[126px] !h-[48px]">获取虚幻引擎</div>
            <div class="login !w-[126px] !h-[48px]">了解许可选项</div>
          </div>
        </div>
        <div class="absolute right-0 w-[60%]">
          <video class="w-[100%] rounded-xs" autoplay muted playsinline>
            <source
              src="https://cms-assets.unrealengine.com/AiKUh5PQCTaOFnmJDZJBfz/d66nnRxEQpatoaaSG3ww"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use './styles';
</style>
