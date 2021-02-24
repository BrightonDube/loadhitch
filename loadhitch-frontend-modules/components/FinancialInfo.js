// import { useForm } from "react-hook-form";
// import { Row, Col, Form, Button } from "react-bootstrap";

// import { useHistory } from "react-router-dom";
// import { useStateMachine } from "little-state-machine";
// import updateAction from "../components/updateAction";

// import styles from "../styles/Register.module.css";

// const FinancialInfo = ({ data, handleChange, next, back }) => {
//   const { register, handleSubmit, errors } = useForm();

//   return (
//     <>
//       <Row className="justify-content-center w-100 py-5">
//         <Col xs={12} sm={10}>
//           <Form
//             className="w-90 mx-auto"
//             onSubmit={handleSubmit(() => handleChange(data))}
//           >
//             <Form.Group>
//               <Form.Control
//                 size="lg"
//                 type="text"
//                 placeholder="Bank Account Number"
//                 name="bank_account"
//                 ref={register({
//                   required: "Account Number Required",
//                   maxLength: {
//                     value: 30,
//                     message: "character limit reached",
//                   },
//                 })}
//               />
//               {errors.bank_account && (
//                 <div className={styles.errorsText}>
//                   {errors.bank_account.message}
//                 </div>
//               )}
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 size="lg"
//                 type="text"
//                 placeholder="Institution Code"
//                 name="institution"
//                 ref={register({
//                   required: false,
//                   maxLength: {
//                     value: 30,
//                     message: "character limit reached",
//                   },
//                 })}
//               />
//               {errors.institution && (
//                 <div className={styles.errorsText}>
//                   {errors.institution.message}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group>
//               <Form.Control
//                 size="lg"
//                 type="text"
//                 placeholder="Transit Number"
//                 name="transitNumber"
//                 ref={register({ required: false, maxLength: 40 })}
//               />
//               {errors.transitNumber &&
//                 errors.transitNumber.type === "maxLength" && (
//                   <span>Max length exceeded</span>
//                 )}
//             </Form.Group>
//             <Button
//               className={`mx-auto ${styles.submitButton}`}
//               variant="success"
//               type="submit"
//               size="lg"
//               onClick={back}
//             >
//               Back
//             </Button>
//             <Button
//               className={`mx-auto ${styles.submitButton}`}
//               variant="success"
//               type="submit"
//               size="lg"
//             >
//               Finish
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default FinancialInfo;
