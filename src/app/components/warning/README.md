# Warning Component

Warning component is a generic component used to display warnings. In our case we display warnings everytime user tries to add 6th nomination because the maximum
nominations allowed are 5.

| Property  | Type                           | Description                                     |
| --------- | ------------------------------ | ----------------------------------------------- |
| data      | { message: string }            | Warning message to be displayed in component.   |
| dialogRef | MatDialogRef<WarningComponent> | This is the reference used to close the dialog. |

## Reference

![](https://images-shoppies-project.s3-us-west-2.amazonaws.com/Screen+Shot+2020-09-06+at+2.20.14+AM.png)
