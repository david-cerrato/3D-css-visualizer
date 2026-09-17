import { useEffect, useRef } from 'react';
import styles from './slider.module.css'

export function Slider({min = 0, max= 100, onChange}: {min?: number, max?: number, onChange: (e: number) => void}) {
        const rangeRef = useRef<HTMLInputElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const range = rangeRef.current;
        const thumb = thumbRef.current;
        const slider = sliderRef.current;

        if (!range || !thumb || !slider) return;

        const handleInput = () => {
            const value = Number(range.value);
            const widthMinusPadding = slider.clientWidth - 24;
            const widthPercentage = widthMinusPadding / (max - min);
            const position = widthPercentage * (value - min) + 12;

            thumb.style.left = `${position}px`;
        };

        range.addEventListener("input", handleInput);

        return () => {
            range.removeEventListener("input", handleInput);
        };
    }, []);

    return (
        <div className={styles.slider}>
            <input
                ref={rangeRef}
                type="range"
                min={min}
                max={max}
                onChange={(e: any) => onChange(e.target.value)}
            />

            <div ref={sliderRef} className={styles.range_slider}>
                <div ref={thumbRef} className={styles.range_thumb} />
            </div>
        </div>
    );
}