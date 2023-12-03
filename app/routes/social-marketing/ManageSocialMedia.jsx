const MessagingPlatforms = () => {
  const platforms = [
    {
      icon: (
        <svg className="h-5" viewBox="0 0 28 28" fill="none">
          <path
            d="M28 14C28 6.26719 21.7328 0 14 0C6.26719 0 0 6.26719 0 14C0 20.9885 5.11656 26.7805 11.8136 27.831V18.0502H8.26164V14H11.8136V10.9162C11.8136 7.41016 13.8999 5.46984 17.0991 5.46984C18.6331 5.46984 20.2366 5.74602 20.2366 5.74602V9.19023H18.4723C16.7311 9.19023 16.1941 10.272 16.1941 11.3766V14H20.0758L19.4545 18.0502H16.1941V27.831C22.8834 26.7805 28 20.9885 28 14Z"
            fill="#1877F2"
          />
          <path
            d="M19.4462 18.05L20.068 13.9999H16.1863V11.3765C16.1863 10.2718 16.731 9.19012 18.4646 9.19012H20.2288V5.7459C20.2288 5.7459 18.6254 5.46973 17.0914 5.46973C13.8927 5.46973 11.8059 7.41059 11.8059 10.9161V13.9999H8.25391V18.05H11.8059V27.8309C12.5195 27.9457 13.248 27.9999 13.9923 27.9999C14.7366 27.9999 15.465 27.9386 16.1787 27.8309V18.05H19.4462Z"
            fill="white"
          />
        </svg>
      ),
      title: "Facebook Messenger",
      description:
        "Elevate your presence on Facebook with powerful publishing, scheduling and monitoring tools.",
    },
    {
      icon: (
        <img className="h-5" src="img/messenger/instagram-logo.png" alt="" />
      ),
      title: "Instagram DM",
      description:
        "Never miss a beat and turn the popularity of Instagram into your biggest asset.",
    },
    {
      icon: (
        <svg className="h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.2833 11.0024L23.2178 0.845215H21.1006L13.3427 9.66452L7.14656 0.845215H0L9.36984 14.1816L0 24.8329H2.11732L10.3098 15.5194L16.8534 24.8329H24L14.2827 11.0024H14.2833ZM11.3833 14.2991L10.4339 12.9711L2.88022 2.40403H6.1323L12.2282 10.932L13.1776 12.26L21.1016 23.345H17.8495L11.3833 14.2996V14.2991Z" />
        </svg>
      ),
      title: "X(Formerly Twitter)",
      description:
        "Grow and build upon your X (formerly Twitter) following with powerful publishing & listening features.",
    },
    {
      icon: (
        <svg className="h-5" viewBox="0 0 24 25" fill="none">
          <path
            d="M22.2225 0.845947H1.7715C0.795 0.845947 0 1.6207 0 2.5747V23.1127C0 24.0689 0.795 24.8452 1.7715 24.8452H22.224C23.2027 24.8452 24 24.0689 24 23.1127V2.5747C24 1.6207 23.2027 0.845947 22.2225 0.845947Z"
            fill="#0177B5"
          />
          <path
            d="M3.55769 9.84307H7.12394V21.2956H3.55769V9.84307ZM5.33819 4.14307C6.47594 4.14307 7.40069 5.06782 7.40069 6.20557C7.40069 7.34332 6.47594 8.27032 5.33894 8.27032C4.79163 8.26913 4.26706 8.05124 3.87999 7.6643C3.49291 7.27736 3.27482 6.75288 3.27344 6.20557C3.27344 5.93453 3.32686 5.66614 3.43065 5.41576C3.53444 5.16538 3.68657 4.93791 3.87832 4.74636C4.07008 4.55481 4.29772 4.40294 4.54821 4.29942C4.79871 4.1959 5.06715 4.14277 5.33819 4.14307ZM9.35069 9.84307H12.7647V11.4083H12.8119C13.2874 10.5083 14.4484 9.55882 16.1869 9.55882C19.7914 9.55882 20.4567 11.9311 20.4567 15.0143V21.2963H16.8994V15.7253C16.8994 14.3978 16.8754 12.6878 15.0499 12.6878C13.1974 12.6878 12.9124 14.1353 12.9124 15.6278V21.2933H9.35594V9.84082L9.35069 9.84307Z"
            fill="white"
          />
        </svg>
      ),
      title: "Linkedin",
      description:
        "Manage your brand presence with more personalized & professional conversations on LinkedIn.",
    },
    {
      icon: (
        <svg className="h-5" viewBox="0 0 24 25" fill="none">
          <path
            d="M23.4761 7.06883C23.3381 6.55981 23.0692 6.09577 22.6963 5.72283C22.3233 5.34989 21.8593 5.08102 21.3503 4.94296C19.4865 4.43408 11.985 4.43408 11.985 4.43408C11.985 4.43408 4.48313 4.44908 2.619 4.95796C2.10997 5.09602 1.64594 5.36489 1.27299 5.73783C0.900053 6.11077 0.631192 6.57481 0.493125 7.08383C0 8.94796 0 12.8453 0 12.8453C0 12.8453 0 16.7427 0.5085 18.6218C0.646567 19.1309 0.915428 19.5949 1.28837 19.9678C1.66131 20.3408 2.12535 20.6096 2.63438 20.7477C4.49813 21.2566 12 21.2566 12 21.2566C12 21.2566 19.5019 21.2566 21.366 20.7481C21.875 20.61 22.3391 20.3412 22.712 19.9682C23.0849 19.5953 23.3538 19.1312 23.4919 18.6222C24 16.7581 24 12.8453 24 12.8453C24 12.8453 23.985 8.94796 23.4761 7.06883Z"
            fill="#FF0000"
          />
          <path
            d="M9.59803 16.4497L15.8212 12.8452L9.59766 9.24072L9.59803 16.4497Z"
            fill="white"
          />
        </svg>
      ),
      title: "Youtube",
      description:
        "Build better relationships with your YouTube fans and followers from a single, scalable platform.",
    },
    {
      icon: (
        <svg className="h-5" viewBox="0 0 25 25" fill="none">
          <path
            d="M12.031 24.2281C18.6583 24.2281 24.0308 18.8556 24.0308 12.2283C24.0308 5.601 18.6583 0.228516 12.031 0.228516C5.40374 0.228516 0.03125 5.601 0.03125 12.2283C0.03125 18.8556 5.40374 24.2281 12.031 24.2281Z"
            fill="#CB2027"
          />
          <path
            d="M12.9996 16.2974C12.0924 16.2272 11.7113 15.7774 10.9998 15.3455C10.6088 17.3971 10.1309 19.3637 8.71548 20.3911C8.27804 17.2903 9.35677 14.9613 9.85775 12.4892C9.00383 11.0517 9.96042 8.15839 11.7615 8.87135C13.9782 9.74794 9.84235 14.2163 12.6189 14.7743C15.5175 15.357 16.7009 9.74473 14.9032 7.91925C12.3059 5.28369 7.34305 7.85935 7.95333 11.6323C8.10199 12.5546 9.05517 12.8346 8.33408 14.1074C6.67181 13.7392 6.17597 12.4282 6.23971 10.6804C6.3426 7.81935 8.81046 5.81611 11.2858 5.53888C14.4163 5.1885 17.3546 6.68842 17.7601 9.63307C18.2164 12.9566 16.3468 16.5558 12.9996 16.2974Z"
            fill="#F1F2F2"
          />
        </svg>
      ),
      title: "Pinterest",
      comingSoon: true,
      description:
        "Turn your Pinterest content into real, long lasting business relationships.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="top-highlight-gradient"></div>

      <div className="container">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <h2 className="text-2xl md:text-6xl/tight font-medium">
            One place to manage all
            <span className="hidden md:inline">
              <br />
            </span>
            your social media accounts
          </h2>
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6 relative">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="relative p-px rounded-xl overflow-hidden"
              >
                <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

                <div className="min-h-full relative rounded-xl bg-canvas p-5 flex flex-col">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-content/10 bg-gradient-to-br from-content/[0.08] via-content/[0.08] to-content/0">
                    {platform.icon}
                  </div>

                  <div className={"flex mt-4  gap-4 items-center"}>
                    <h3 className="text-lg">{platform.title}</h3>

                    {platform.comingSoon && (
                      <span
                        className={
                          " inline-flex px-3 py-1.5 text-[#6A83FB] rounded-full bg-content/[0.1] text-xs/none"
                        }
                      >
                        Coming soon
                      </span>
                    )}
                  </div>

                  <p className="mt-1 font-light text-xs/relaxed opacity-60">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <a
            href="#"
            className="p-3 group hover:opacity-90 mt-6 inline-flex items-center gap-2"
          >
            Get started
            <svg
              className="group-hover:translate-x-0.5 transition-transform w-5 h-5 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MessagingPlatforms;
