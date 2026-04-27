export function RegisterPage() {
    return (
        <main className="flex flex-col items-center ">
            <form
                className="flex flex-col gap-[0.5rem] m-[1rem] auth-form bg-[var(--color-surface)] p-[1rem] rounded-[var(--radius-lg)]"
                action=""
                method="post"
            >
                <h1 className=" text-center ">Register</h1>
                <label htmlFor="username">Username</label>
                <input
                    className="p-[0.5em] bg-[var(--color-bg)] outline-0 text-[var(--color-text)] rounded-[var(--radius-md)]"
                    type="text"
                    name="username"
                    id="username"
                />
                <label htmlFor="email">Email</label>
                <input
                    className="p-[0.5em] bg-[var(--color-bg)] outline-0 text-[var(--color-text)] rounded-[var(--radius-md)]"
                    type="email"
                    name="email"
                    id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    className="p-[0.5em] bg-[var(--color-bg)] outline-0 text-[var(--color-text)] rounded-[var(--radius-md)]"
                    type="password"
                    name="password"
                    id="password"
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="p-[0.5em] bg-[var(--color-bg)] outline-0 text-[var(--color-text)] rounded-[var(--radius-md)]"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                />
                <button className="self-center" type="submit">
                    Register
                </button>
            </form>
        </main>
    );
}
