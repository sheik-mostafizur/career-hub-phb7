import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-red-500 text-white p-10">
        <h1 className="font-bold text-3xl">404 page not found</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
