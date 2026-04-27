import "./App.css";
import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Outlet, NavLink } from "react-router-dom";
import type { SelectedItemsType } from "./utils/types.js";

export type SetSelectedItemsType = Dispatch<
    SetStateAction<SelectedItemsType[]>
>;

export type ContextType = [SetSelectedItemsType, SelectedItemsType[]];

function App() {
    const [selecteditems, setSelectedItems] = useState<SelectedItemsType[]>([]);
    const amount = useMemo(
        () => selecteditems.reduce((prev, current) => prev + current.amount, 0),
        [selecteditems],
    );
    return (
        <>
            <header>
                <nav className="navbar">
                    <ul>
                        <NavLink
                            to=""
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[var(--color-accent)] pb-[0.5rem] pt-[0.5rem] pl-[1.5rem] pr-[1.5rem]  hover:text-[var(--color-accent-hover)] bg-[var(--color-accent-soft)] navlink"
                                    : "text-[var(--color-text-muted)] pb-[0.5rem] pt-[0.5rem] pl-[1.5rem] pr-[1.5rem] navlink"
                            }
                        >
                            Store Page
                        </NavLink>
                        <NavLink
                            to="shopping-cart"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex gap-[0.5rem] pb-[0.5rem] pt-[0.5rem] pl-[1.25rem] pr-[1.25rem] text-[var(--color-accent)] ml-auto hover:text-[var(--color-accent-hover)] bg-[var(--color-accent-soft)] navlink"
                                    : "flex pb-[0.5rem] pt-[0.5rem] pl-[1.25rem] pr-[1.25rem] text-[var(--color-text-muted)] gap-[0.5rem] navlink"
                            }
                        >
                            <ShoppingCartIcon className="h-[2.5em]" />
                            {amount}
                        </NavLink>
                        <NavLink
                            to="login"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex pb-[0.5rem] pt-[0.5rem] pl-[1rem] pr-[1rem] gap-[0.5rem] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] bg-[var(--color-accent-soft)] navlink"
                                    : "flex pb-[0.5rem] pt-[0.5rem] pl-[1rem] pr-[1rem] text-[var(--color-text-muted)] gap-[0.5rem] navlink"
                            }
                        >
                            <ArrowLeftEndOnRectangleIcon className="h-[2.5em]" />
                            <span className="auth-text-nav">Login</span>
                        </NavLink>
                        <NavLink
                            to="register"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex pb-[0.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] gap-[0.5rem] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] bg-[var(--color-accent-soft)] navlink"
                                    : "flex pb-[0.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] text-[var(--color-text-muted)] gap-[0.5rem] navlink"
                            }
                        >
                            <UserCircleIcon className="h-[2.5em]" />
                            <span className="auth-text-nav">Register</span>
                        </NavLink>
                    </ul>
                </nav>
            </header>
            <Outlet context={[setSelectedItems, selecteditems]} />
        </>
    );
}

export default App;
