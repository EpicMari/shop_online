import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../atoms/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PriceSlider from "../PriceSlider";
import CategoryProductsFilter from "../CategoryProductsFilter";
import { StyledWrapper } from "./StyledModalFilter";

const ModalFilter = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledWrapper>
      <Button button contained responsive onClickFn={handleClickOpen}>
        Filter
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Search bike</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <PriceSlider />
            <CategoryProductsFilter />
          </form>
        </DialogContent>
        <DialogActions>
          <Button button contained responsive onClickFn={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </StyledWrapper>
  );
};

export default ModalFilter;
