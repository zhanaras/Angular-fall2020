import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger,
    group,
    sequence,
    animation,
} from '@angular/animations';

export const TOAST_ANIMATION_STATES = [
    state('top-start-show', style({
        bottom: '40px'
    })),
    state('top-center-show', style({})),
    state('top-end-show', style({})),
    state('bottom-start-show', style({})),
    state('bottom-center-show', style({})),
    state('bottom-end-show', style({})),

    state('top-start-hide', style({
        bottom: '-100%'
    })),
    state('top-center-hide', style({})),
    state('top-end-hide', style({})),
    state('bottom-start-hide', style({})),
    state('bottom-center-hide', style({})),
    state('bottom-end-hide', style({})),
];

export const TOAST_ANIMATION_TRANSITIONS = [
    transition('top-start-hide => top-start-show', animate('1s ease')),
    transition('top-start-show => top-start-hide', animate('1s ease'))
];

export const CLOSE_ANIMATION = animation([
    animate(
        '{{ time }}'
    ),
]);

export const TOAST_TRIGGER = trigger('toastState', [
    ...TOAST_ANIMATION_STATES,
    ...TOAST_ANIMATION_TRANSITIONS,
]);


// export const toastAnimation: AnimationTriggerMetadata = trigger('toast',
//     [
//         state('top-start-show', style({
//             bottom: '40px'
//         })),
//         state('top-center-show', style({})),
//         state('top-end-show', style({})),
//         state('bottom-start-show', style({})),
//         state('bottom-center-show', style({})),
//         state('bottom-end-show', style({})),
    
//         state('top-start-hide', style({
//             bottom: '-100%'
//         })),
//         state('top-center-hide', style({})),
//         state('top-end-hide', style({})),
//         state('bottom-start-hide', style({})),
//         state('bottom-center-hide', style({})),
//         state('bottom-end-hide', style({})),

//         transition('top-start-hide => top-start-show', animate('1s ease')),
//         transition('top-start-show => top-start-hide', animate('1s ease'))
    
//     ]
// );


// export const TOASTS_ANIMATION_STATES = [
//     state('top-start-show', style({
//         bottom: '40px'
//     })),
//     state('top-center-show', style({})),
//     state('top-end-show', style({})),
//     state('bottom-start-show', style({})),
//     state('bottom-center-show', style({})),
//     state('bottom-end-show', style({})),

//     state('top-start-hide', style({
//         bottom: '-100%'
//     })),
//     state('top-center-hide', style({})),
//     state('top-end-hide', style({})),
//     state('bottom-start-hide', style({})),
//     state('bottom-center-hide', style({})),
//     state('bottom-end-hide', style({})),
// ];

// export const TOASTS_ANIMATION_TRANSITIONS = [
//     transition('top-start-hide => top-start-show', animate('1s ease')),
//     transition('top-start-show => top-start-hide', animate('1s ease'))
// ];


// export const TOAST_TRIGGER = trigger('toastTrigger', [
//     ...TOASTS_ANIMATION_STATES,
//     ...TOASTS_ANIMATION_TRANSITIONS,
// ]);
