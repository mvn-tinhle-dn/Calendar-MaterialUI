import { toast } from "react-toastify";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation, useQueryClient } from "react-query";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import {
  CalendarContext,
  CloseModalContext,
} from "../../store/CalendarContext";
import { postEvent } from "../../api/api";
import { GridActionsForm, TextFieldDate } from "./styles";

const FormCreateEvent = () => {
  const currentDay = useContext(CalendarContext);
  const setShowModalAddEvent = useContext(CloseModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((event) => postEvent(event), {
    onSuccess: () => {
      queryClient.invalidateQueries("eventData");
      toast.success("Create event is success!");
      setShowModalAddEvent(false);
    },
    onError: () => toast.success("Create event is failed!"),
  });

  const onSubmit = (data) => {
    const convertDataEvent = {
      ...data,
      start: new Date(data.start).toString(),
      end: new Date(data.end).toString(),
    };
    mutate(convertDataEvent);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextFieldDate
            name="title"
            label="Tên sự kiện"
            {...register("title", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Vui lòng nhập tên sự kiện"}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="start"
            label="Ngày bắt đầu"
            type="date"
            defaultValue={currentDay.format("YYYY-MM-DD")}
            {...register("start", { required: true })}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="end"
            label="Ngày kết thúc"
            type="date"
            defaultValue={currentDay.format("YYYY-MM-DD")}
            {...register("end", { required: true })}
            fullWidth
          />
        </Grid>
        <GridActionsForm item xs={12}>
          <LoadingButton
            loading={isLoading}
            endIcon={<CheckCircleOutlineIcon />}
            type="submit"
            variant="contained"
            color="primary"
            loadingPosition="end"
          >
            Create
          </LoadingButton>
        </GridActionsForm>
      </Grid>
    </form>
  );
};

export default FormCreateEvent;
