import styles from "./EnglishDestinationBadge.module.css";

type EnglishDestinationBadgeProps = {
  label: string;
};

export function EnglishDestinationBadge({
  label,
}: EnglishDestinationBadgeProps) {
  return (
    <span className={styles.root} title={label}>
      <span aria-hidden="true" lang="en">
        EN
      </span>
      <span className={styles.assistive}> — {label}</span>
    </span>
  );
}
