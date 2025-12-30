import { useReducer } from "react";
const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
};
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":



    if (state.isSubmitted) {
  return (
    <div>
      <h2>Registration Successful 🎉</h2>
      <button onClick={() => dispatch({ type: "RESET_FORM" })}>
        Register Again
      </button>
    </div>
  );
}

      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function MultiStepForm() {
 const [state, dispatch] = useReducer(formReducer, initialState);

 return (

  <div>
    <h2>Step {state.step}</h2>

    {state.step === 1 && (
      <>
        <input
          type="text"
          placeholder="Name"
          value={state.formData.name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={state.formData.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "email",
              value: e.target.value,
            })
          }
        />
        <br />

        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
          Next
        </button>
      </>
    )}




    {state.step === 2 && (
  <>
    <input
      type="text"
      placeholder="Username"
      value={state.formData.username}
      onChange={(e) =>
        dispatch({
          type: "UPDATE_FIELD",
          field: "username",
          value: e.target.value,
        })
      }
    />
    <br />

    <input
      type="password"
      placeholder="Password"
      value={state.formData.password}
      onChange={(e) =>
        dispatch({
          type: "UPDATE_FIELD",
          field: "password",
          value: e.target.value,
        })
      }
    />
    <br />

    <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
      Back
    </button>

    <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
      Next
    </button>
  </>
)}



{state.step === 3 && (
  <>
    <h3>Review Your Details</h3>

    <p><strong>Name:</strong> {state.formData.name}</p>
    <p><strong>Email:</strong> {state.formData.email}</p>
    <p><strong>Username:</strong> {state.formData.username}</p>

    <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
      Back
    </button>

    <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
      Submit
    </button>
  </>
)}

  </div>
);
}

export default MultiStepForm;
