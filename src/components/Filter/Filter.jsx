import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

// import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Filter = (props) => {
  const { register, watch } = useForm({
    defaultValues: {
     filter: '',
    }
  });

  let filter = watch('filter');

  useEffect(() => {
    console.log('я працюю')
    props.handleFilter(filter);
    props.handleContacts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
    return (
      <>
        <form >
        <h2>Filter</h2>
          <input {...register("filter")} type="text" />
        </form>
      </>
          
    );
  
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleContacts: PropTypes.func.isRequired,
};
