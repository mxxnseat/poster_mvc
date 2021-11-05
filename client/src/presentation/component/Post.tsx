import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { FullyPost } from "../../app/redux/types/posts.redux.type";

export const Post: FC<FullyPost> = ({
  author,
  createTime,
  title,
  text,
  additionalText,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="right" gutterBottom component="div">
                {author}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              {additionalText}
            </Typography>
          </Grid>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography>{createTime}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
