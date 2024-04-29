import React from "react";

export default function Test() {
  return (
    <div>
      <main>
        <div role="region" aria-label="Notifications (F8)">
          <ol className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"></ol>
        </div>
        <main className="w-full h-full overflow-auto lg:fixed">
          <div className="sticky top-0 z-10">
            <header className="border-b top-0 bg-white xl:static">
              <nav className="pt-1.5 flex items-center justify-between flex-wrap text-sm sm:flex-nowrap px-4 xl:px-8">
                <div className="">
                  <a href="/dashboard">
                    <svg
                      width="148"
                      height="32"
                      className=""
                      viewBox="0 0 158 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.598 23V8.45455H50.7827C51.9096 8.45455 52.8447 8.64867 53.5881 9.03693C54.3362 9.42519 54.8949 9.96259 55.2642 10.6491C55.6335 11.331 55.8182 12.1193 55.8182 13.0142C55.8182 13.9044 55.6312 14.688 55.2571 15.3651C54.8878 16.0374 54.3291 16.5606 53.581 16.9347C52.8376 17.3087 51.9025 17.4957 50.7756 17.4957H46.848V15.6065H50.5767C51.2869 15.6065 51.8646 15.5047 52.3097 15.3011C52.7595 15.0975 53.0885 14.8016 53.2969 14.4134C53.5052 14.0251 53.6094 13.5587 53.6094 13.0142C53.6094 12.465 53.5028 11.9891 53.2898 11.5866C53.0814 11.1842 52.7524 10.8764 52.3026 10.6634C51.8575 10.4455 51.2727 10.3366 50.5483 10.3366H47.7926V23H45.598ZM52.7784 16.4375L56.3722 23H53.8722L50.3494 16.4375H52.7784ZM61.4929 23.2415C60.8016 23.2415 60.1766 23.1136 59.6179 22.858C59.0592 22.5975 58.6165 22.2211 58.2898 21.7287C57.9678 21.2363 57.8068 20.6326 57.8068 19.9176C57.8068 19.3021 57.9252 18.7955 58.1619 18.3977C58.3987 18 58.7183 17.6851 59.1207 17.4531C59.5232 17.2211 59.973 17.0459 60.4702 16.9276C60.9673 16.8092 61.474 16.7192 61.9901 16.6577C62.6435 16.5819 63.1738 16.5204 63.581 16.473C63.9882 16.4209 64.2841 16.3381 64.4688 16.2244C64.6534 16.1108 64.7457 15.9261 64.7457 15.6705V15.6207C64.7457 15.0005 64.5705 14.5199 64.2202 14.179C63.8745 13.8381 63.3584 13.6676 62.6719 13.6676C61.9569 13.6676 61.3935 13.8262 60.9815 14.1435C60.5743 14.456 60.2926 14.804 60.1364 15.1875L58.1406 14.733C58.3774 14.0701 58.723 13.535 59.1776 13.1278C59.6368 12.7159 60.1648 12.4176 60.7614 12.233C61.358 12.0436 61.9853 11.9489 62.6435 11.9489C63.0791 11.9489 63.5407 12.0009 64.0284 12.1051C64.5208 12.2045 64.9801 12.3892 65.4062 12.6591C65.8371 12.929 66.1899 13.3149 66.4645 13.8168C66.7391 14.3139 66.8764 14.9602 66.8764 15.7557V23H64.8026V21.5085H64.7173C64.58 21.7831 64.3741 22.053 64.0994 22.3182C63.8248 22.5833 63.4721 22.8035 63.0412 22.9787C62.6103 23.1539 62.0942 23.2415 61.4929 23.2415ZM61.9545 21.5369C62.5417 21.5369 63.0436 21.4209 63.4602 21.1889C63.8816 20.9569 64.2012 20.6539 64.419 20.2798C64.6416 19.901 64.7528 19.4962 64.7528 19.0653V17.6591C64.6771 17.7348 64.5303 17.8059 64.3125 17.8722C64.0994 17.9337 63.8556 17.9882 63.581 18.0355C63.3063 18.0781 63.0388 18.1184 62.7784 18.1562C62.518 18.1894 62.3002 18.2178 62.125 18.2415C61.7131 18.2936 61.3366 18.3812 60.9957 18.5043C60.6596 18.6274 60.3897 18.8049 60.1861 19.0369C59.9872 19.2642 59.8878 19.5672 59.8878 19.946C59.8878 20.4716 60.0819 20.8693 60.4702 21.1392C60.8584 21.4044 61.3532 21.5369 61.9545 21.5369ZM69.7049 27.0909V12.0909H71.7788V13.8594H71.9563C72.0794 13.6321 72.257 13.3693 72.489 13.071C72.721 12.7727 73.043 12.5123 73.4549 12.2898C73.8668 12.0625 74.4113 11.9489 75.0884 11.9489C75.9691 11.9489 76.7551 12.1714 77.4464 12.6165C78.1377 13.0616 78.6798 13.7031 79.0728 14.5412C79.4705 15.3793 79.6694 16.3878 79.6694 17.5668C79.6694 18.7457 79.4729 19.7566 79.0799 20.5994C78.6869 21.4375 78.1471 22.0838 77.4606 22.5384C76.774 22.9882 75.9904 23.2131 75.1097 23.2131C74.4469 23.2131 73.9047 23.1018 73.4833 22.8793C73.0666 22.6567 72.7399 22.3963 72.5032 22.098C72.2665 21.7997 72.0842 21.5346 71.9563 21.3026H71.8285V27.0909H69.7049ZM71.7859 17.5455C71.7859 18.3125 71.8971 18.9848 72.1197 19.5625C72.3422 20.1402 72.6642 20.5923 73.0856 20.919C73.507 21.241 74.0231 21.402 74.6339 21.402C75.2683 21.402 75.7987 21.2339 76.2248 20.8977C76.6509 20.5568 76.9729 20.0952 77.1907 19.5128C77.4132 18.9304 77.5245 18.2746 77.5245 17.5455C77.5245 16.8258 77.4156 16.1795 77.1978 15.6065C76.9847 15.0336 76.6628 14.5814 76.2319 14.25C75.8058 13.9186 75.2731 13.7528 74.6339 13.7528C74.0183 13.7528 73.4975 13.9115 73.0714 14.2287C72.65 14.5459 72.3304 14.9886 72.1126 15.5568C71.8948 16.125 71.7859 16.7879 71.7859 17.5455ZM82.0487 23V12.0909H84.1722V23H82.0487ZM83.1211 10.4077C82.7518 10.4077 82.4345 10.2846 82.1694 10.0384C81.909 9.7874 81.7788 9.48911 81.7788 9.14347C81.7788 8.79309 81.909 8.49479 82.1694 8.24858C82.4345 7.99763 82.7518 7.87216 83.1211 7.87216C83.4904 7.87216 83.8053 7.99763 84.0657 8.24858C84.3308 8.49479 84.4634 8.79309 84.4634 9.14347C84.4634 9.48911 84.3308 9.7874 84.0657 10.0384C83.8053 10.2846 83.4904 10.4077 83.1211 10.4077ZM91.1129 23.2131C90.2322 23.2131 89.4463 22.9882 88.755 22.5384C88.0684 22.0838 87.5286 21.4375 87.1357 20.5994C86.7474 19.7566 86.5533 18.7457 86.5533 17.5668C86.5533 16.3878 86.7498 15.3793 87.1428 14.5412C87.5405 13.7031 88.085 13.0616 88.7763 12.6165C89.4676 12.1714 90.2512 11.9489 91.1271 11.9489C91.8042 11.9489 92.3487 12.0625 92.7607 12.2898C93.1773 12.5123 93.4993 12.7727 93.7266 13.071C93.9586 13.3693 94.1385 13.6321 94.2663 13.8594H94.3942V8.45455H96.5178V23H94.4439V21.3026H94.2663C94.1385 21.5346 93.9538 21.7997 93.7124 22.098C93.4756 22.3963 93.1489 22.6567 92.7322 22.8793C92.3156 23.1018 91.7758 23.2131 91.1129 23.2131ZM91.5817 21.402C92.1925 21.402 92.7086 21.241 93.13 20.919C93.5561 20.5923 93.8781 20.1402 94.0959 19.5625C94.3184 18.9848 94.4297 18.3125 94.4297 17.5455C94.4297 16.7879 94.3208 16.125 94.103 15.5568C93.8852 14.9886 93.5656 14.5459 93.1442 14.2287C92.7228 13.9115 92.2019 13.7528 91.5817 13.7528C90.9425 13.7528 90.4098 13.9186 89.9837 14.25C89.5575 14.5814 89.2356 15.0336 89.0178 15.6065C88.8047 16.1795 88.6982 16.8258 88.6982 17.5455C88.6982 18.2746 88.8071 18.9304 89.0249 19.5128C89.2427 20.0952 89.5646 20.5568 89.9908 20.8977C90.4216 21.2339 90.9519 21.402 91.5817 21.402ZM99.7191 23V8.45455H108.739V10.3438H101.914V14.7756H108.093V16.6577H101.914V23H99.7191ZM115.062 23.2202C114.039 23.2202 113.147 22.9858 112.384 22.517C111.622 22.0483 111.03 21.3925 110.609 20.5497C110.187 19.7069 109.977 18.7221 109.977 17.5952C109.977 16.4635 110.187 15.474 110.609 14.6264C111.03 13.7789 111.622 13.1207 112.384 12.652C113.147 12.1832 114.039 11.9489 115.062 11.9489C116.085 11.9489 116.977 12.1832 117.739 12.652C118.502 13.1207 119.094 13.7789 119.515 14.6264C119.936 15.474 120.147 16.4635 120.147 17.5952C120.147 18.7221 119.936 19.7069 119.515 20.5497C119.094 21.3925 118.502 22.0483 117.739 22.517C116.977 22.9858 116.085 23.2202 115.062 23.2202ZM115.069 21.4375C115.732 21.4375 116.281 21.2623 116.717 20.9119C117.152 20.5616 117.474 20.0952 117.683 19.5128C117.896 18.9304 118.002 18.2888 118.002 17.5881C118.002 16.892 117.896 16.2528 117.683 15.6705C117.474 15.0833 117.152 14.6122 116.717 14.2571C116.281 13.902 115.732 13.7244 115.069 13.7244C114.401 13.7244 113.847 13.902 113.407 14.2571C112.971 14.6122 112.647 15.0833 112.434 15.6705C112.226 16.2528 112.121 16.892 112.121 17.5881C112.121 18.2888 112.226 18.9304 112.434 19.5128C112.647 20.0952 112.971 20.5616 113.407 20.9119C113.847 21.2623 114.401 21.4375 115.069 21.4375ZM122.517 23V12.0909H124.57V13.8239H124.684C124.882 13.2367 125.233 12.7751 125.735 12.4389C126.241 12.098 126.814 11.9276 127.453 11.9276C127.586 11.9276 127.742 11.9323 127.922 11.9418C128.107 11.9512 128.251 11.9631 128.355 11.9773V14.0085C128.27 13.9848 128.119 13.9588 127.901 13.9304C127.683 13.8973 127.465 13.8807 127.248 13.8807C126.746 13.8807 126.298 13.9872 125.905 14.2003C125.517 14.4086 125.209 14.6998 124.982 15.0739C124.755 15.4432 124.641 15.8646 124.641 16.3381V23H122.517ZM130.193 23V12.0909H132.232V13.8665H132.366C132.594 13.2652 132.965 12.7964 133.482 12.4602C133.998 12.1193 134.616 11.9489 135.335 11.9489C136.064 11.9489 136.675 12.1193 137.168 12.4602C137.665 12.8011 138.032 13.2699 138.268 13.8665H138.382C138.643 13.2841 139.057 12.8201 139.625 12.4744C140.193 12.1241 140.87 11.9489 141.656 11.9489C142.646 11.9489 143.453 12.259 144.078 12.8793C144.708 13.4995 145.023 14.4347 145.023 15.6847V23H142.899V15.8835C142.899 15.1449 142.698 14.6098 142.295 14.2784C141.893 13.947 141.412 13.7812 140.854 13.7812C140.162 13.7812 139.625 13.9943 139.241 14.4205C138.858 14.8419 138.666 15.384 138.666 16.0469V23H136.55V15.7486C136.55 15.1567 136.365 14.6809 135.996 14.321C135.626 13.9612 135.146 13.7812 134.554 13.7812C134.152 13.7812 133.78 13.8878 133.439 14.1009C133.103 14.3092 132.83 14.6004 132.622 14.9744C132.419 15.3485 132.317 15.7817 132.317 16.2741V23H130.193ZM156.044 14.7543L154.119 15.0952C154.038 14.849 153.911 14.6146 153.735 14.392C153.565 14.1695 153.333 13.9872 153.039 13.8452C152.746 13.7031 152.379 13.6321 151.939 13.6321C151.337 13.6321 150.835 13.767 150.433 14.0369C150.03 14.3021 149.829 14.6454 149.829 15.0668C149.829 15.4313 149.964 15.7249 150.234 15.9474C150.504 16.17 150.94 16.3523 151.541 16.4943L153.274 16.892C154.278 17.1241 155.026 17.4815 155.518 17.9645C156.011 18.4474 156.257 19.0748 156.257 19.8466C156.257 20.5 156.067 21.0824 155.689 21.5938C155.315 22.1004 154.791 22.4981 154.119 22.7869C153.451 23.0758 152.677 23.2202 151.797 23.2202C150.575 23.2202 149.578 22.9598 148.806 22.4389C148.035 21.9134 147.561 21.1676 147.386 20.2017L149.439 19.8892C149.566 20.4242 149.829 20.8291 150.227 21.1037C150.625 21.3736 151.143 21.5085 151.782 21.5085C152.478 21.5085 153.035 21.3641 153.451 21.0753C153.868 20.7817 154.076 20.4242 154.076 20.0028C154.076 19.6619 153.949 19.3755 153.693 19.1435C153.442 18.9115 153.056 18.7363 152.535 18.6179L150.689 18.2131C149.671 17.9811 148.918 17.6117 148.43 17.1051C147.947 16.5985 147.706 15.9569 147.706 15.1804C147.706 14.5365 147.886 13.973 148.245 13.4901C148.605 13.0071 149.102 12.6307 149.737 12.3608C150.371 12.0862 151.098 11.9489 151.917 11.9489C153.096 11.9489 154.024 12.2045 154.701 12.7159C155.378 13.2225 155.826 13.902 156.044 14.7543Z"
                        fill="black"
                      ></path>
                      <path
                        d="M23.3333 23.3333L23.3333 8.66667M10.4 4H21.6C23.8402 4 24.9603 4 25.816 4.43597C26.5686 4.81947 27.1805 5.43139 27.564 6.18404C28 7.03969 28 8.15979 28 10.4V21.6C28 23.8402 28 24.9603 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.9603 28 23.8402 28 21.6 28H10.4C8.15979 28 7.03969 28 6.18404 27.564C5.43139 27.1805 4.81947 26.5686 4.43597 25.816C4 24.9603 4 23.8402 4 21.6V10.4C4 8.15979 4 7.03969 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4Z"
                        stroke="#1F2937"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto sm:flex-1 lg:block">
                  <ul className="flex items-center overflow-x-auto sm:ml-12">
                    <li className="py-3 border-b-[1.5px] border-transparent">
                      <a
                        className="block py-1.5 px-3 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 duration-150"
                        href="/dashboard"
                      >
                        Forms
                      </a>
                    </li>
                    <li className="py-3 border-b-[1.5px] border-transparent">
                      <a
                        className="block py-1.5 px-3 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 duration-150"
                        href="/dashboard/responses"
                      >
                        Responses{" "}
                      </a>
                    </li>
                    <li className="ml-1">
                      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 rounded-md py-1.5 px-3 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 duration-150 font-normal">
                        Feedback
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3">
                  <button
                    type="button"
                    id="radix-:R6nqja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    className="outline-none"
                  >
                    <span className="flex shrink-0 overflow-hidden rounded-full w-10 h-10 relative">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-white text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-500"></span>
                    </span>
                  </button>
                </div>
              </nav>
            </header>
          </div>
          <div className="lg:flex">
            <div className="builder-mode">
              <div className="absolute w-full h-full -z-10 inset-0 transition-colors dark:bg-zinc-950"></div>
            </div>
            <div className="builder-mode h-full flex-1 pt-20 pb-12 transition-colors relative xl:px-8 xl:pt-10">
              <div className="max-w-2xl mx-auto sticky top-0 flex flex-wrap justify-end gap-3 px-4 sm:px-0">
                <div className="flex-1">
                  <div className="flex items-center gap-x-2 text-xs font-medium text-zinc-700">
                    <div className="flex items-center gap-x-1">
                      <a href="/dashboard" className="hover:underline">
                        Forms
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <p className="max-w-[200px] truncate">Untitled</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-x-3">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-settings w-5 h-5"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14">
                    Save
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 text-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-900">
                    Publish
                  </button>
                </div>
              </div>
              <div>
                <div className="max-w-2xl mx-auto mt-3 border shadow rounded-xl">
                  <div className="py-3 border-b">
                    <div
                      dir="ltr"
                      data-orientation="horizontal"
                      className="w-60 mx-auto"
                    >
                      <div
                        role="tablist"
                        aria-orientation="horizontal"
                        className="inline-flex h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50"
                        data-orientation="horizontal"
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected="true"
                          aria-controls="radix-:r0:-content-Editor"
                          data-state="active"
                          id="radix-:r0:-trigger-Editor"
                          className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          Editor
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected="false"
                          aria-controls="radix-:r0:-content-Preview"
                          data-state="inactive"
                          id="radix-:r0:-trigger-Preview"
                          className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 p-8" id="form-playground">
                    <div className="relative group flex-1">
                      <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-grip-vertical w-5 h-5"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <circle cx="9" cy="19" r="1"></circle>
                          <circle cx="15" cy="12" r="1"></circle>
                          <circle cx="15" cy="5" r="1"></circle>
                          <circle cx="15" cy="19" r="1"></circle>
                        </svg>
                      </button>
                      <div className="relative group flex-1">
                        <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                          <div>
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md px-1 h-7 text-zinc-500 hover:text-white hover:bg-red-500 duration-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-trash w-4 h-4"
                              >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p
                          className="text-zinc-600 dark:text-zinc-300 text-left"
                          data-state="closed"
                        >
                          <div>
                            <div translate="no" className="tiptap ProseMirror">
                              <p>
                                The only way to do great work is to love what
                                you do.
                              </p>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 relative group flex-1">
                      <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-grip-vertical w-5 h-5"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <circle cx="9" cy="19" r="1"></circle>
                          <circle cx="15" cy="12" r="1"></circle>
                          <circle cx="15" cy="5" r="1"></circle>
                          <circle cx="15" cy="19" r="1"></circle>
                        </svg>
                      </button>
                      <div className="space-y-2 relative group flex-1">
                        <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
                            type="button"
                            id="radix-:r27:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                              className="w-4 h-4 flex-none"
                            >
                              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                            </svg>
                          </button>
                        </div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
                          <input
                            className="w-full outline-none bg-transparent"
                            type="text"
                            value="Email"
                          />
                        </label>
                        <input
                          className="flex h-10 w-full text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:text-zinc-300 bg-white focus-visible:bg-white border border-zinc-200 duration-100 placeholder:text-zinc-400 text-zinc-600 hover:border-zinc-200 focus:border-zinc-200 hover:bg-white ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-0 focus-visible:duration-0 shadow-sm rounded-lg py-2 px-3 dark:hover:bg-zinc-800/80"
                          id="d2644ca4-51bc-46eb-8d98-b620b4f6e98d"
                          type="email"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative group flex-1">
                      <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-grip-vertical w-5 h-5"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <circle cx="9" cy="19" r="1"></circle>
                          <circle cx="15" cy="12" r="1"></circle>
                          <circle cx="15" cy="5" r="1"></circle>
                          <circle cx="15" cy="19" r="1"></circle>
                        </svg>
                      </button>
                      <div className="space-y-2 relative group flex-1">
                        <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
                            type="button"
                            id="radix-:r21:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                              className="w-4 h-4 flex-none"
                            >
                              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                            </svg>
                          </button>
                        </div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
                          <input
                            className="w-full outline-none bg-transparent"
                            type="text"
                            value="Emailhjbhjhj"
                          />
                        </label>
                        <input
                          className="flex h-10 w-full text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:text-zinc-300 bg-white focus-visible:bg-white border border-zinc-200 duration-100 placeholder:text-zinc-400 text-zinc-600 hover:border-zinc-200 focus:border-zinc-200 hover:bg-white ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-0 focus-visible:duration-0 shadow-sm rounded-lg py-2 px-3 dark:hover:bg-zinc-800/80"
                          id="50916a19-27f3-4741-8dc0-9d639dceebc1"
                          type="email"
                          value="Enter your emaildeds"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative group flex-1">
                      <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-grip-vertical w-5 h-5"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <circle cx="9" cy="19" r="1"></circle>
                          <circle cx="15" cy="12" r="1"></circle>
                          <circle cx="15" cy="5" r="1"></circle>
                          <circle cx="15" cy="19" r="1"></circle>
                        </svg>
                        
                      </button>
                      <div className="space-y-2 relative group flex-1">
                        <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
                            type="button"
                            id="radix-:r23:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                              className="w-4 h-4 flex-none"
                            >
                              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                            </svg>
                          </button>
                        </div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
                          <input
                            className="w-full outline-none bg-transparent"
                            type="text"
                            value="Website URL"
                          />
                        </label>
                        <input
                          className="flex h-10 w-full text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:text-zinc-300 bg-white focus-visible:bg-white border border-zinc-200 duration-100 placeholder:text-zinc-400 text-zinc-600 hover:border-zinc-200 focus:border-zinc-200 hover:bg-white ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-0 focus-visible:duration-0 shadow-sm rounded-lg py-2 px-3 dark:hover:bg-zinc-800/80"
                          id="2b86fe9a-245b-4d8f-a856-383a6822ad26"
                          type="url"
                          value="https://www.example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative group flex-1">
                      <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-grip-vertical w-5 h-5"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <circle cx="9" cy="19" r="1"></circle>
                          <circle cx="15" cy="12" r="1"></circle>
                          <circle cx="15" cy="5" r="1"></circle>
                          <circle cx="15" cy="19" r="1"></circle>
                        </svg>
                      </button>
                      <div className="space-y-2 relative group flex-1">
                        <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
                            type="button"
                            id="radix-:r25:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                              className="w-4 h-4 flex-none"
                            >
                              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                            </svg>
                          </button>
                        </div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
                          <input
                            className="w-full outline-none bg-transparent"
                            type="text"
                            value="Job title"
                          />
                        </label>
                        <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 px-3 flex items-center w-full rounded-lg h-10 text-zinc-600">
                          <input
                            className="outline-none bg-transparent w-full text-left"
                            value="Select a job title"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-chevron-down flex-none w-5 h-5 text-zinc-400"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                        <div className="rounded-lg px-3 py-2 border mt-2 text-sm text-zinc-500 space-y-2">
                          <div className="flex items-center gap-x-1">
                            <input
                              className="w-full p-2 border rounded-lg"
                              placeholder="write an option"
                              value="Option 1"
                            />
                            <button className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md top-0 bottom-0 my-auto -right-6 px-1 h-7 text-zinc-500 hover:text-white hover:bg-red-500 duration-200 group-hover:block block static translate-y-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-trash w-4 h-4"
                              >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
                            </button>
                          </div>
                          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 rounded-md px-3 bg-zinc-50 text-center w-full">
                            Add new option
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 hover:bg-zinc-900/90 h-10 w-full bg-zinc-800 text-zinc-50 active:scale-[0.99] duration-200 focus-visible:bg-none dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-700 shadow-sm rounded-lg py-2 px-3">
                      <input
                        className="outline-none bg-transparent w-full text-center"
                        value="Submit"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-3 max-w-2xl mx-auto">
                  <button
                    className="items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-10 px-4 py-2 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex justify-center gap-3 text-zinc-700 dark:text-zinc-300 rounded-lg"
                    type="button"
                    id="radix-:R19uuul7qja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-plus w-5 h-5 text-zinc-500"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Insert a form block
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-none fixed z-10 inset-x-0 top-16 pt-6 w-full xl:relative xl:max-w-[19rem] xl:top-0 xl:inset-x-[unset] xl:pt-0">
              <aside className="relative w-full">
                <div className="fixed z-10 inset-x-0 w-full h-full bg-white px-4 border-l xl:inset-x-[unset] xl:block xl:max-w-[19rem] xl:top-auto xl:px-0 hidden">
                  <div className="h-full overflow-y-auto pb-32 text-gray-400 text-sm p-8 space-y-4">
                    <div
                      dir="ltr"
                      data-orientation="horizontal"
                      className="w-full"
                    >
                      <div
                        role="tablist"
                        aria-orientation="horizontal"
                        className="inline-flex h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50"
                        data-orientation="horizontal"
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected="true"
                          aria-controls="radix-:Rf7qja:-content-light"
                          data-state="active"
                          id="radix-:Rf7qja:-trigger-light"
                          className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-sun w-4 h-4"
                          >
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                          </svg>
                          Light
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected="false"
                          aria-controls="radix-:Rf7qja:-content-dark"
                          data-state="inactive"
                          id="radix-:Rf7qja:-trigger-dark"
                          className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-moon w-4 h-4"
                          >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                          </svg>
                          Dark
                        </button>
                      </div>
                      <div className="mt-6">
                        <div
                          data-state="active"
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-:Rf7qja:-trigger-light"
                          id="radix-:Rf7qja:-content-light"
                          className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center gap-x-2">
                              <svg
                                className="w-5 h-5 text-zinc-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_339_477)">
                                  <path
                                    d="M1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333C11.3807 18.3333 12.5 17.2141 12.5 15.8333V15.4167C12.5 15.0297 12.5 14.8361 12.5214 14.6737C12.6691 13.5519 13.5519 12.6691 14.6737 12.5214C14.8361 12.5 15.0297 12.5 15.4167 12.5H15.8333C17.2141 12.5 18.3333 11.3807 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M5.83334 10.8333C6.29358 10.8333 6.66667 10.4602 6.66667 10C6.66667 9.53977 6.29358 9.16667 5.83334 9.16667C5.3731 9.16667 5.00001 9.53977 5.00001 10C5.00001 10.4602 5.3731 10.8333 5.83334 10.8333Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M13.3333 7.50001C13.7936 7.50001 14.1667 7.12691 14.1667 6.66667C14.1667 6.20643 13.7936 5.83334 13.3333 5.83334C12.8731 5.83334 12.5 6.20643 12.5 6.66667C12.5 7.12691 12.8731 7.50001 13.3333 7.50001Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M8.33334 6.66667C8.79358 6.66667 9.16667 6.29358 9.16667 5.83334C9.16667 5.3731 8.79358 5.00001 8.33334 5.00001C7.8731 5.00001 7.50001 5.3731 7.50001 5.83334C7.50001 6.29358 7.8731 6.66667 8.33334 6.66667Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_339_477">
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Button Background
                              </label>
                            </div>
                            <button
                              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                              type="button"
                              id="radix-:Rhdf7qja:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                            >
                              <div className="w-5 h-5 rounded-md border bg-zinc-800"></div>
                              <span>bg-zinc-800</span>
                            </button>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-x-2">
                              <svg
                                className="w-5 h-5 text-zinc-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_319_368)">
                                  <path
                                    d="M14.7125 6.60833L10 1.89166L5.28751 6.60833C2.68334 9.2125 2.68334 13.4333 5.28751 16.0375C6.58751 17.3375 8.29584 17.9917 10 17.9917C11.7042 17.9917 13.4125 17.3417 14.7125 16.0375C17.3167 13.4333 17.3167 9.2125 14.7125 6.60833V6.60833ZM10 16.3208C8.66251 16.3208 7.40834 15.8 6.46667 14.8542C5.52084 13.9125 5.00001 12.6583 5.00001 11.3208C5.00001 9.98333 5.52084 8.72916 6.46667 7.78333L10 4.25V16.3208Z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_319_368">
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Button Color
                              </label>
                            </div>
                            <button
                              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                              type="button"
                              id="radix-:Ridf7qja:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                            >
                              <div className="w-5 h-5 rounded-md border bg-zinc-50"></div>
                              <span>text-zinc-50</span>
                            </button>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-x-2">
                              <svg
                                className="w-5 h-5 text-zinc-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.1875 2.1875H2.8125C2.4668 2.1875 2.1875 2.4668 2.1875 2.8125V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V2.8125C17.8125 2.4668 17.5332 2.1875 17.1875 2.1875ZM16.4062 16.4062H3.59375V3.59375H16.4062V16.4062Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Border
                              </label>
                            </div>
                            <div className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3 pr-0">
                              <button
                                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 w-full justify-start rounded-lg gap-x-3 border-none shadow-none h-full px-0 bg-transparent focus-visible:ring-0 focus-visible:bg-transparent focus-visible:ring-offset-0"
                                type="button"
                                id="radix-:R1jdf7qja:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                              >
                                <div className="w-5 h-5 rounded-md border bg-zinc-200"></div>
                                <span>border-zinc-200</span>
                              </button>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-x-2">
                              <svg
                                className="w-5 h-5 text-zinc-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_339_477)">
                                  <path
                                    d="M1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333C11.3807 18.3333 12.5 17.2141 12.5 15.8333V15.4167C12.5 15.0297 12.5 14.8361 12.5214 14.6737C12.6691 13.5519 13.5519 12.6691 14.6737 12.5214C14.8361 12.5 15.0297 12.5 15.4167 12.5H15.8333C17.2141 12.5 18.3333 11.3807 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M5.83334 10.8333C6.29358 10.8333 6.66667 10.4602 6.66667 10C6.66667 9.53977 6.29358 9.16667 5.83334 9.16667C5.3731 9.16667 5.00001 9.53977 5.00001 10C5.00001 10.4602 5.3731 10.8333 5.83334 10.8333Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M13.3333 7.50001C13.7936 7.50001 14.1667 7.12691 14.1667 6.66667C14.1667 6.20643 13.7936 5.83334 13.3333 5.83334C12.8731 5.83334 12.5 6.20643 12.5 6.66667C12.5 7.12691 12.8731 7.50001 13.3333 7.50001Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M8.33334 6.66667C8.79358 6.66667 9.16667 6.29358 9.16667 5.83334C9.16667 5.3731 8.79358 5.00001 8.33334 5.00001C7.8731 5.00001 7.50001 5.3731 7.50001 5.83334C7.50001 6.29358 7.8731 6.66667 8.33334 6.66667Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_339_477">
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Fields Background
                              </label>
                            </div>
                            <button
                              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                              type="button"
                              id="radix-:Rkdf7qja:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                            >
                              <div className="w-5 h-5 rounded-md border bg-white"></div>
                              <span>bg-white</span>
                            </button>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-x-2">
                              <svg
                                className="w-5 h-5 text-zinc-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.8333 11.6667L8.33333 9.16667M12.5086 2.91667V1.66667M15.7914 4.21722L16.6753 3.33334M15.7914 10.8333L16.6753 11.7172M9.17529 4.21722L8.29141 3.33334M17.092 7.50001H18.342M5.10947 17.3905L12.8072 9.69281C13.1372 9.3628 13.3022 9.19779 13.364 9.00752C13.4184 8.84015 13.4184 8.65986 13.364 8.49249C13.3022 8.30222 13.1372 8.13721 12.8072 7.8072L12.1928 7.19281C11.8628 6.8628 11.6978 6.69779 11.5075 6.63597C11.3401 6.58159 11.1599 6.58159 10.9925 6.63597C10.8022 6.69779 10.6372 6.8628 10.3072 7.19281L2.60947 14.8905C2.27946 15.2205 2.11445 15.3856 2.05263 15.5758C1.99825 15.7432 1.99825 15.9235 2.05263 16.0909C2.11445 16.2811 2.27946 16.4461 2.60947 16.7761L3.22385 17.3905C3.55387 17.7205 3.71887 17.8856 3.90915 17.9474C4.07652 18.0018 4.25681 18.0018 4.42418 17.9474C4.61445 17.8856 4.77946 17.7205 5.10947 17.3905Z"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Fields Effect
                              </label>
                            </div>
                            <button
                              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                              type="button"
                              id="radix-:Rldf7qja:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                            >
                              <div className="w-6 h-6 rounded-md bg-zinc-50 border flex items-center justify-center">
                                <svg
                                  className="w-4 h-4 text-zinc-400"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_382_625)">
                                    <path
                                      d="M10.2528 5.3878C10.5613 5.26785 10.7155 5.20787 10.7588 5.12307C10.7963 5.0496 10.7952 4.96235 10.7557 4.88989C10.7102 4.80625 10.5545 4.75034 10.243 4.63852L2.29813 1.78652C2.04328 1.69504 1.91586 1.6493 1.83256 1.67814C1.76013 1.70323 1.70321 1.76014 1.67813 1.83257C1.64928 1.91587 1.69502 2.0433 1.78651 2.29815L4.63848 10.243C4.7503 10.5545 4.80621 10.7102 4.88985 10.7558C4.96231 10.7952 5.04956 10.7963 5.12303 10.7588C5.20783 10.7155 5.26781 10.5613 5.38776 10.2528L6.68618 6.91405C6.70968 6.85362 6.72143 6.82341 6.73958 6.79797C6.75566 6.77542 6.77538 6.7557 6.79793 6.73962C6.82337 6.72147 6.85358 6.70972 6.91401 6.68622L10.2528 5.3878Z"
                                      stroke="currentColor"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_382_625">
                                      <rect
                                        className="w-4 h-4 text-zinc-400"
                                        fill="currentColor"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <span>Hover</span>
                            </button>
                            <button
                              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                              type="button"
                              id="radix-:Rtdf7qja:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                            >
                              <div className="w-6 h-6 rounded-md bg-zinc-50 border flex items-center justify-center">
                                <svg
                                  className="w-4 h-4 text-zinc-400"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_382_628)">
                                    <path
                                      d="M6.5 0.5L6.5005 2.031C7.38161 2.1424 8.20063 2.54372 8.82858 3.17176C9.45653 3.7998 9.85773 4.61888 9.969 5.5H11.5V6.5L9.969 6.5005C9.85763 7.38153 9.45638 8.2005 8.82844 8.82844C8.2005 9.45638 7.38153 9.85763 6.5005 9.969L6.5 11.5H5.5V9.969C4.61888 9.85773 3.7998 9.45653 3.17176 8.82858C2.54372 8.20063 2.1424 7.38161 2.031 6.5005L0.5 6.5V5.5H2.031C2.14229 4.6188 2.54357 3.79967 3.17162 3.17162C3.79967 2.54357 4.6188 2.14229 5.5 2.031V0.5H6.5ZM6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9C6.79565 9 7.55871 8.68393 8.12132 8.12132C8.68393 7.55871 9 6.79565 9 6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3ZM6 5C6.26522 5 6.51957 5.10536 6.70711 5.29289C6.89464 5.48043 7 5.73478 7 6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5Z"
                                      fill="currentColor"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_382_628">
                                      <rect
                                        className="w-4 h-4 text-zinc-400"
                                        fill="currentColor"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <span>Focus</span>
                            </button>
                          </div>
                        </div>
                        <div
                          data-state="inactive"
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-:Rf7qja:-trigger-dark"
                          id="radix-:Rf7qja:-content-dark"
                          className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 space-y-4"
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-x-2">
                        <svg
                          className="w-5 h-5 text-zinc-400"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7547 5.82662C11.9648 5.30418 11.0179 5 10 5C7.23857 5 5 7.23857 5 10C5 12.7614 7.23857 15 10 15C11.0222 15 11.9729 14.6932 12.7648 14.1667H10V13.3333H13.7268C14.1588 12.8507 14.4984 12.2837 14.7178 11.6599H10V10.8266H14.932C14.9767 10.5578 15 10.2816 15 10C15 9.72358 14.9776 9.45233 14.9344 9.18817H10V8.35483H14.723C14.5028 7.72241 14.1591 7.14785 13.7208 6.65995H10V5.82662H12.7547Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.3333 10C18.3333 5.39763 14.6023 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6023 5.39763 18.3333 10 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 10ZM10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.3181 13.6819 3.33333 10 3.33333C6.3181 3.33333 3.33334 6.3181 3.33334 10C3.33334 13.6819 6.3181 16.6667 10 16.6667Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Shadow
                        </label>
                      </div>
                      <button
                        className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                        type="button"
                        id="radix-:Rhn7qja:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <div className="w-5 h-5 rounded-md bg-white border shadow-sm"></div>
                        <span>shadow-sm</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <svg
                        className="w-5 h-5 text-zinc-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1875 2.1875H2.8125C2.4668 2.1875 2.1875 2.4668 2.1875 2.8125V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V2.8125C17.8125 2.4668 17.5332 2.1875 17.1875 2.1875ZM16.4062 16.4062H3.59375V3.59375H16.4062V16.4062ZM9.45312 7.14844H10.5469C10.6328 7.14844 10.7031 7.07813 10.7031 6.99219V5.89844C10.7031 5.8125 10.6328 5.74219 10.5469 5.74219H9.45312C9.36719 5.74219 9.29688 5.8125 9.29688 5.89844V6.99219C9.29688 7.07813 9.36719 7.14844 9.45312 7.14844ZM5.89844 10.7031H6.99219C7.07813 10.7031 7.14844 10.6328 7.14844 10.5469V9.45312C7.14844 9.36719 7.07813 9.29688 6.99219 9.29688H5.89844C5.8125 9.29688 5.74219 9.36719 5.74219 9.45312V10.5469C5.74219 10.6328 5.8125 10.7031 5.89844 10.7031ZM13.0078 10.7031H14.1016C14.1875 10.7031 14.2578 10.6328 14.2578 10.5469V9.45312C14.2578 9.36719 14.1875 9.29688 14.1016 9.29688H13.0078C12.9219 9.29688 12.8516 9.36719 12.8516 9.45312V10.5469C12.8516 10.6328 12.9219 10.7031 13.0078 10.7031ZM9.45312 10.7031H10.5469C10.6328 10.7031 10.7031 10.6328 10.7031 10.5469V9.45312C10.7031 9.36719 10.6328 9.29688 10.5469 9.29688H9.45312C9.36719 9.29688 9.29688 9.36719 9.29688 9.45312V10.5469C9.29688 10.6328 9.36719 10.7031 9.45312 10.7031ZM9.45312 14.2578H10.5469C10.6328 14.2578 10.7031 14.1875 10.7031 14.1016V13.0078C10.7031 12.9219 10.6328 12.8516 10.5469 12.8516H9.45312C9.36719 12.8516 9.29688 12.9219 9.29688 13.0078V14.1016C9.29688 14.1875 9.36719 14.2578 9.45312 14.2578Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Padding
                      </label>
                    </div>
                    <div className="flex gap-x-3">
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:Rbn7qja:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        className="flex items-center border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 w-full justify-start rounded-lg shadow-sm gap-x-3 h-9"
                      >
                        <div className="w-full text-left flex gap-x-3 items-center">
                          <span className="inline-block pr-3 border-r text-sm font-medium text-zinc-700">
                            X
                          </span>
                          <span>3</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down flex-none h-4 w-4 opacity-50"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:Rjn7qja:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        className="flex items-center border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 w-full justify-start rounded-lg shadow-sm gap-x-3 h-9"
                      >
                        <div className="w-full text-left flex gap-x-3 items-center">
                          <span className="inline-block pr-3 border-r text-sm font-medium text-zinc-700">
                            Y
                          </span>
                          <span>2</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down flex-none h-4 w-4 opacity-50"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-x-2">
                        <svg
                          className="w-5 h-5 text-zinc-400"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask id="path-1-inside-1_338_452" fill="white">
                            <path d="M3 11C3 6.58172 6.58172 3 11 3H17V17H3V11Z"></path>
                          </mask>
                          <path
                            d="M1.5 10.5C1.5 5.25329 5.75329 1 11 1H17V5H11C7.41015 5 4.5 7.68629 4.5 11L1.5 10.5ZM17 17H3H17ZM1.5 17V10.5C1.5 5.25329 5.75329 1 11 1V5C7.41015 5 4.5 7.68629 4.5 11V17H1.5ZM17 3V17V3Z"
                            fill="currentColor"
                            mask="url(#path-1-inside-1_338_452)"
                          ></path>
                        </svg>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Radius
                        </label>
                      </div>
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:Rkn7qja:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        className="flex items-center border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 w-full justify-start rounded-lg shadow-sm gap-x-3 h-9"
                      >
                        <div className="w-full text-left">
                          <span>rounded-lg</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down flex-none h-4 w-4 opacity-50"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
