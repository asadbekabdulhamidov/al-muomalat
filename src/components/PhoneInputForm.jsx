import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneInputForm({ name, value, onChange, onBlur, error, touched }) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      ></label>
      <PhoneInput
        country={'uz'}
        value={value}
        onChange={(phone) => onChange(name, phone)}
        onBlur={onBlur}
        inputProps={{
          name: name,
        }}
        inputClass={`!w-full !h-[60px] !text-base !px-14 !border ${
          error && touched ? '!border-red-500' : '!border-gray-400'
        } !rounded-lg`}
        buttonClass="!border-r !border-gray-400"
        containerClass="!w-full"
      />
      {error && touched && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default PhoneInputForm;
