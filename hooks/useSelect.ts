import { useDispatch, useSelector } from "react-redux";

export const useRedux = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  return {
    selector,
    dispatch,
  };
};
