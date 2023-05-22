import { toast } from "react-toastify";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";

import {
  CalendarContext,
  CloseModalContext,
} from "../../store/CalendarContext";
import { TextFieldDate } from "./styles";
import { postEvent } from "../../api/api";

const FormCreateEvent = () => {
  const currentDay = useContext(CalendarContext);
  const setShowModalAddEvent = useContext(CloseModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate } = useMutation((event) => postEvent(event), {
    onSuccess: () => {
      queryClient.invalidateQueries("eventData");
      toast.success("Create event is success!");
    },
    onError: () => toast.success("Create event is failed!"),
  });

  const onSubmit = (data) => {
    const convertDataEvent = {
      ...data,
      start: new Date(data.start).toString(),
      end: new Date(data.end).toString(),
    };
    setShowModalAddEvent(false);
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
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormCreateEvent;
