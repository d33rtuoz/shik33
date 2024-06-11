import { useRouteError } from "react-router-dom";

const Error = () => {
  /**
   * TODO: Catch error codes.
   * https://reactrouter.com/en/main/hooks/use-route-error
   */

  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Unexpected error has ocurred.</p>
    </div>
  );
};

export default Error;
