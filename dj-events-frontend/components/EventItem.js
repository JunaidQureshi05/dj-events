import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
import dayjs from "dayjs";

const EventItem = ({ evt }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.data.attributes.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {dayjs(evt.date).format("DD-MM-YYYY")} at {evt.time}{" "}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
