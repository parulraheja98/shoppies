import {
  animate,
  animation,
  AnimationReferenceMetadata,
  group,
  keyframes,
  style,
  useAnimation,
} from "@angular/animations";

const grow = animation(
  [
    style({
      height: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    }),
    animate(
      "{{time}}",
      style({
        height: "*",
        paddingTop: "*",
        paddingBottom: "*",
        marginTop: "*",
        marginBottom: "*",
      })
    ),
  ],
  { params: { time: "200ms" } }
);

const shrink = animation(
  animate(
    "{{time}}",
    style({
      height: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    })
  ),
  { params: { time: "200ms" } }
);

export const swingIn = animation(
  [
    style({
      transformOrigin: "50% 0px",
      transform: "perspective(500px) rotate3d(1, 0, 0, 90deg)",
    }),
    group([
      useAnimation(grow, { params: { time: "200ms" } }),
      animate(
        "{{time}}",
        keyframes([
          style({ transform: "perspective(500px) rotate3d(1, 0, 0, -70deg)" }),
          style({ transform: "perspective(500px) rotate3d(1, 0, 0, 40deg)" }),
          style({ transform: "perspective(500px) rotate3d(1, 0, 0, -15deg)" }),
          style({ transform: "perspective(500px) rotate3d(1, 0, 0, 0deg)" }),
        ])
      ),
    ]),
  ],
  { params: { time: "600ms" } }
);
/**
 * rotate element in on the X axis as if it is hanging on a hinge.
 * @param time the duration of the animation
 */
export function useSwingInAnimation(
  time: string = "600ms"
): AnimationReferenceMetadata {
  return useAnimation(swingIn, { params: { time } });
}

export const swingOut = animation(
  [
    animate(
      "{{time}}",
      keyframes([
        style([
          {
            transformOrigin: "50% 0px",
            transform: "perspective(500px) rotate3d(1, 0, 0, 0deg)",
          },
          { offset: 0 },
        ]),
        style([
          { transform: "perspective(500px) rotate3d(1, 0, 0, -30deg)" },
          { offset: 0.3 },
        ]),
        style([
          { transform: "perspective(500px) rotate3d(1, 0, 0, 90deg)" },
          { offset: 1 },
        ]),
      ])
    ),
    useAnimation(shrink, { params: { time: "200ms" } }),
  ],
  { params: { time: "300ms" } }
);
/**
 * rotate element out on the X axis until it is facing up and invisible to the user
 * @param time the duration of the animation
 */
export function useSwingOutAnimation(
  time: string = "300ms"
): AnimationReferenceMetadata {
  return useAnimation(swingOut, { params: { time } });
}
