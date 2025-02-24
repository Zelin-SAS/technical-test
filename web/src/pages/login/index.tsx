import { createRef, useEffect, useState } from "react";
import LogoLight from "../../assets/zbook-logo-1.svg";
import { useData } from "../../components/context";
import { loginUser } from "../../services/models";
import { Toast } from "../../components/toast";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function Login() {
	const { dispatch } = useData();
	const [error, setError] = useState<boolean>(false);
	const emailRef = createRef<HTMLInputElement>();
	const passwordRef = createRef<HTMLInputElement>();

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		loginUser({ email, password })
			.then((data) => {
				dispatch({ type: "LOGIN", payload: data });
				window.location.href = "/admin";
			})
			.catch(() => {
				emailRef.current!.value = "";
				passwordRef.current!.value = "";
				setError(true);
			});
	};

	useEffect(() => {
		const user = localStorage.getItem("zebook_logged_user");
		if (user) {
			window.location.href = "/admin";
		}
	}, []);

	return (
		<>
			<Toast
				isOpen={error}
				title="Failed!"
				message="Something went wrong while trying to log in. Try again."
				type="error"
				onClose={() => setError(false)}
			/>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="flex item-center justify-center">
						<img
							src={LogoLight}
							alt="ZBook Logo"
							className="h-8 w-auto"
						/>
						<span className="ml-2 text-xl font-bold text-gray-900">
							ZeBook
						</span>
					</div>
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleLogin}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm/6 font-medium text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									required
									autoComplete="email"
									ref={emailRef}
									className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm/6 font-medium text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									required
									autoComplete="current-password"
									ref={passwordRef}
									className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="hover:cursor-pointer flex w-full justify-center rounded-md bg-[#DCF763] border border-[#435058] px-3 py-1.5 text-sm/6 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm/6 text-gray-500">
						<ExclamationTriangleIcon className="h-4 w-4 inline-block text-yellow-500" />
						<a
							href="#"
							className="font-semibold text-gray-800 hover:text-indigo-500"
						>
							This section is only for administrators and staff
							members of Zebook.
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
