import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-black">
            <div class="container max-w-6xl py-10 mx-auto">

                <div
                    class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start"
                >

                    <div
                        class="flex flex-col items-center space-y-8 md:items-start md:space-y-4"
                    >

                        {/* <div class="h-8">
                            <img src="images/logo.svg" alt="" class="w-44 md:ml-3" />
                        </div> */}

                        <div
                            class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
                        >

                            <div class="h-10 group">
                                <a href="/">Home</a>
                                <div
                                    class="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>

                            <div class="h-10 group">
                                <a href="about">About</a>
                                <div
                                    class="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>

                            <div class="h-10 group">
                                <a href="login">Login</a>
                                <div
                                    class="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>

                            <div class="h-10 group">
                                <a href="register">Register</a>
                                <div
                                    class="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col items-start justify-between space-y-4 text-gray-500"
                    >

                        <div
                            class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0"
                        >

                            <div class="h-8 group">
                                <a href="#">
                                    <img src="images/icon-facebook.svg" alt="" class="h-6" />
                                </a>
                            </div>

                            <div class="h-8 group">
                                <a href="#">
                                    <img src="images/icon-twitter.svg" alt="" class="h-6" />
                                </a>
                            </div>

                            <div class="h-8 group">
                                <a href="#">
                                    <img src="images/icon-pinterest.svg" alt="" class="h-6" />
                                </a>
                            </div>

                            <div class="h-8 group">
                                <a href="#">
                                    <img src="images/icon-instagram.svg" alt="" class="h-6" />
                                </a>
                            </div>
                        </div>
                        <div class="font-bold pr-2">
                            &copy; 2023 Hak's Website. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;