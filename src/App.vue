<template>
  <!-- Header -->
  <header class="flex pt-[17px] pb-[18px] min-h-[80px] bg-[#272727]">
    <div class="flex items-center justify-between gap-x-[50px] px-[30px] mx-auto max-w-[1800px] w-full">
      <a class="flex shrink-0" href="/">
        <img class="" src="/src/assets/images/logo.svg" alt="Logo Kate Kulish">
      </a>
      <ul class="flex items-center justify-between flex-wrap gap-[10px] w-full font-semibold text-[18px] leading-[.8] text-white">
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">Main</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">Gallery</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">Exhibitions</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">Bio</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">FAQ</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">Contacts</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300"  href="#">Auction</a>
        </li>
        <li>
          <a class="relative after:content-[''] after:opacity-0 hover:after:opacity-100 after:absolute after:bottom-[-12px] after:rounded after:left-[50%] after:mb-0.5 after:bg-white flex after:w-[5px] after:h-[5px] after:transition after:duration-300" href="#">NFT</a>
        </li>
      </ul>
      <div class="flex">
        <div class="relative after:content-[''] after:top-[3.5px] after:h-[39px] after:w-[2px] after:absolute after:bg-white/[.05] after:right-[-18px] mr-[18px]">
          <a class="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white transition duration-300 hover:bg-[#4137d0]" href="#">
            <svg class="w-[23px] h-[21px] fill-[#242424] hover:fill-white" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3516 0.4375C15.4419 0.438558 14.5422 0.625965 13.7077 0.988163C12.8733 1.35036 12.122 1.87967 11.5 2.54344C10.5885 1.57065 9.40566 0.894329 8.10496 0.602281C6.80426 0.310232 5.44581 0.415942 4.20595 0.905688C2.96608 1.39543 1.90208 2.24659 1.15206 3.34868C0.402047 4.45076 0.000656326 5.75286 0 7.08594C0 13.7056 10.677 20.2031 11.1406 20.4583C11.2524 20.5254 11.3804 20.5609 11.5108 20.5609C11.6412 20.5609 11.7691 20.5254 11.8809 20.4583C12.323 20.2031 23 13.7056 23 7.08594C22.9981 5.32325 22.297 3.6333 21.0506 2.38688C19.8042 1.14047 18.1143 0.439403 16.3516 0.4375ZM11.5 18.9956C9.64203 17.8097 1.4375 12.2681 1.4375 7.08594C1.43842 5.97904 1.79179 4.9012 2.44639 4.00861C3.10099 3.11602 4.02282 2.45506 5.07827 2.12153C6.13372 1.788 7.26795 1.79922 8.3166 2.15357C9.36524 2.50792 10.2738 3.18698 10.9106 4.09234C10.977 4.18652 11.065 4.26336 11.1672 4.31641C11.2695 4.36946 11.383 4.39715 11.4982 4.39715C11.6134 4.39715 11.7269 4.36946 11.8292 4.31641C11.9314 4.26336 12.0194 4.18652 12.0858 4.09234C12.7221 3.18542 13.6308 2.50489 14.6802 2.14955C15.7295 1.7942 16.8648 1.78254 17.9212 2.11625C18.9776 2.44996 19.9002 3.11167 20.555 4.00533C21.2097 4.89898 21.5627 5.97807 21.5625 7.08594C21.5625 12.2645 13.358 17.8061 11.5 18.9956Z"/>
            </svg>
          </a>
        </div>
        <ul class="flex items-center gap-x-[10px] ml-[18px]">
          <li>
            <a class="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/[.05] transition duration-300 hover:bg-[#3b5998] backdrop-blur-[2px]" href="#">
              <svg class="w-[11px] h-[22px]" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.66437 3.65292H11.6728V0.154917C11.3263 0.10725 10.1346 0 8.74679 0C5.85104 0 3.86738 1.82142 3.86738 5.16908V8.25H0.671875V12.1605H3.86738V22H7.78521V12.1614H10.8515L11.3382 8.25092H7.78429V5.55683C7.78521 4.42658 8.08954 3.65292 9.66437 3.65292V3.65292Z" fill="white"/>
              </svg>
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/[.05] transition duration-300 hover:bg-black" href="#">
              <svg class="w-[18px] h-[20px]" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7616 5.01513C16.6202 5.01513 15.5671 4.63701 14.7214 3.99912C13.7515 3.26787 13.0546 2.19521 12.8085 0.958886C12.7476 0.653418 12.7147 0.338183 12.7116 0.0151367H9.45107V8.92451L9.44716 13.8046C9.44716 15.1093 8.59755 16.2155 7.41982 16.6046C7.07802 16.7175 6.70888 16.771 6.32451 16.7499C5.83388 16.7229 5.37411 16.5749 4.9745 16.3358C4.12411 15.8272 3.54755 14.9046 3.53193 13.8491C3.50732 12.1995 4.84091 10.8546 6.48935 10.8546C6.81474 10.8546 7.12724 10.9077 7.41982 11.0042V8.56904V7.69365C7.11122 7.64795 6.79716 7.62412 6.47958 7.62412C4.67529 7.62412 2.98779 8.37412 1.78154 9.72529C0.869816 10.7464 0.322941 12.0491 0.238566 13.4151C0.128019 15.2097 0.78466 16.9155 2.0581 18.1741C2.24521 18.3589 2.44169 18.5304 2.64716 18.6886C3.73896 19.5288 5.07372 19.9843 6.47958 19.9843C6.79716 19.9843 7.11122 19.9608 7.41982 19.9151C8.7331 19.7206 9.94482 19.1194 10.9011 18.1741C12.0761 17.0128 12.7253 15.471 12.7323 13.83L12.7155 6.54248C13.2761 6.9749 13.889 7.33271 14.5468 7.61044C15.5698 8.04209 16.6546 8.26084 17.771 8.26044V5.89287V5.01435C17.7718 5.01513 17.7624 5.01513 17.7616 5.01513V5.01513Z" fill="white"/>
              </svg>
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/[.05] transition duration-300 hover:bg-[#c44993]" href="#">
              <svg class="w-[20px] h-[20px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5862 0H5.41381C2.42858 0 0 2.42858 0 5.41381V14.5863C0 17.5714 2.42858 20 5.41381 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41381C20 2.42858 17.5714 0 14.5862 0V0ZM9.99998 15.4686C6.98454 15.4686 4.53139 13.0154 4.53139 9.99998C4.53139 6.98454 6.98454 4.53139 9.99998 4.53139C13.0154 4.53139 15.4686 6.98454 15.4686 9.99998C15.4686 13.0154 13.0154 15.4686 9.99998 15.4686V15.4686ZM15.5993 5.82106C14.7082 5.82106 13.9834 5.09627 13.9834 4.20516C13.9834 3.31405 14.7082 2.58911 15.5993 2.58911C16.4904 2.58911 17.2154 3.31405 17.2154 4.20516C17.2154 5.09627 16.4904 5.82106 15.5993 5.82106Z" fill="white"/>
                <path d="M9.99923 5.70312C7.63046 5.70312 5.70312 7.63031 5.70312 9.99923C5.70312 12.368 7.63046 14.2953 9.99923 14.2953C12.3682 14.2953 14.2953 12.368 14.2953 9.99923C14.2953 7.63031 12.3682 5.70312 9.99923 5.70312Z" fill="white"/>
                <path d="M15.5997 3.76172C15.3552 3.76172 15.1562 3.96069 15.1562 4.20514C15.1562 4.44958 15.3552 4.64856 15.5997 4.64856C15.8443 4.64856 16.0432 4.44974 16.0432 4.20514C16.0432 3.96054 15.8443 3.76172 15.5997 3.76172Z" fill="white"/>
              </svg>
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/[.05] transition duration-300 hover:bg-[#ff0000]" href="#">
              <svg class="w-[24px] h-[17px]" width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.6735 2.90778C24.3926 1.86354 23.5693 1.04038 22.5252 0.7592C20.6178 0.237305 12.988 0.237305 12.988 0.237305C12.988 0.237305 5.35845 0.237305 3.45103 0.739413C2.42702 1.0203 1.58363 1.86369 1.30274 2.90778C0.800781 4.81505 0.800781 8.77047 0.800781 8.77047C0.800781 8.77047 0.800781 12.7458 1.30274 14.6332C1.58392 15.6773 2.40694 16.5004 3.45117 16.7816C5.37853 17.3036 12.9883 17.3036 12.9883 17.3036C12.9883 17.3036 20.6178 17.3036 22.5252 16.8015C23.5695 16.5205 24.3926 15.6973 24.6738 14.6532C25.1756 12.7458 25.1756 8.79055 25.1756 8.79055C25.1756 8.79055 25.1957 4.81505 24.6735 2.90778V2.90778ZM10.5588 12.4246V5.11631L16.9034 8.77047L10.5588 12.4246Z" fill="white"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- / Header -->
  <main>
    <!-- Hero -->
    <section class="relative h-[1319px] bg-center bg-cover bg-no-repeat bg-bg-hero">
      <div class="px-[30px] mx-auto max-w-[1800px]">
        <div class="pt-[130px] pl-[28px]">
          <h1 class="mb-6 drop-shadow-3xl w-1/2 font-serif text-12xl uppercase text-white">Kate Kulish</h1>
          <ul role="list" class="relative z-10 flex gap-10 items-center pl-5 ml-3 text-[26px] text-white marker:text-white marker:text-xl list-disc">
            <li>Pureness</li>
            <li>Energy</li>
            <li>Practicing mindfulness</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- / Hero -->
    <!-- Gallery -->
    <section>
      <div class="px-[30px] mx-auto max-w-[1800px]">
        <h2 class="font-serif text-11xl uppercase text-[#272727]">Gallery</h2>
      </div>

    </section>
    <!-- / Gallery -->
  </main>
  <!-- Footer -->
  <footer>

  </footer>
  <!-- / Footer -->

</template>
