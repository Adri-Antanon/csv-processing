import { ChangeEventHandler, FC } from 'react';

interface Props {
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}

const CSVInput: FC<Props> = ({ changeHandler }) => {
  return (
    <input
      type="file"
      name="file"
      accept=".csv"
      onChange={changeHandler}
      style={{ display: 'block', margin: '10px auto' }}
    />
  );
};

export default CSVInput;
