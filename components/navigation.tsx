"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../styles/navigation.module.css";

export const Navigation = () => {
    const path = usePathname();
    return (
        <nav>
            <div className="flex">
                <ul>
                    <li>
                        <Link
                            href={"/"}
                            className={`${style.link} ${
                                path === "/" ? style.active : ""
                            }`}
                        >
                            Home
                        </Link>
                        {path === "/" ? "🐶" : ""}
                    </li>
                    <li>
                        <Link
                            href={"/mypage"}
                            className={`${style.link} ${
                                path === "/mypage" ? style.active : ""
                            }`}
                        >
                            Mypage
                        </Link>
                        {path === "/mypage" ? "⭐️" : ""}
                    </li>
                </ul>
            </div>
        </nav>
    );
};
