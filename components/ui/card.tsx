/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3;

interface StepStyle {
  containerWidth: number;
  containerHeight: string | number;
  imageHeight: number;
  contentDirection: "row" | "column";
  contentAlign: "flex-start" | "center";
  contentJustify: "flex-start" | "space-between";
  infoDirection: "row" | "column";
  infoAlign: "flex-start" | "center";
  infoJustify: "flex-start" | "space-between";
  infoWidth: string;
}

const stepStyles: Record<Step, StepStyle> = {
  1: {
    containerWidth: 400,
    containerHeight: "auto",
    imageHeight: 230,
    contentDirection: "column",
    contentAlign: "flex-start",
    contentJustify: "flex-start",
    infoDirection: "column",
    infoAlign: "flex-start",
    infoJustify: "flex-start",
    infoWidth: "100%",
  },
  2: {
    containerWidth: 550,
    containerHeight: "auto",
    imageHeight: 280,
    contentDirection: "column",
    contentAlign: "flex-start",
    contentJustify: "flex-start",
    infoDirection: "row",
    infoAlign: "center",
    infoJustify: "space-between",
    infoWidth: "100%",
  },
  3: {
    containerWidth: 700,
    containerHeight: 600,
    imageHeight: 330,
    contentDirection: "row",
    contentAlign: "center",
    contentJustify: "space-between",
    infoDirection: "row",
    infoAlign: "center",
    infoJustify: "space-between",
    infoWidth: "auto",
  },
};

const cardVariants = {
  hidden: {
    y: 120,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

interface CardProps {
  logoSrc: string;
  mainTitle: string;
  websiteUrl: string;
  lastUpdate: string;
  cardImageSrc: string;
}

const App: React.FC<CardProps> = ({
  logoSrc,
  mainTitle,
  websiteUrl,
  lastUpdate,
}) => {
  const [step, setStep] = useState<Step>(1);

  const handleClick = () => setStep((prevStep) => ((prevStep % 3) + 1) as Step);

  const currentStyle = stepStyles[step];
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000)
    );

  return (
    <main className="bg-background text-black relative flex items-start justify-center bg-cover bg-center md:items-center">
      <motion.div
        className="relative cursor-pointer overflow-hidden bg-white p-2"
        style={{
          width: currentStyle.containerWidth,
          height: currentStyle.containerHeight,
          borderRadius: 24,
        }}
        layout
        onClick={handleClick}
      >
        <motion.div
          layout
          style={{
            height: currentStyle.imageHeight,
            borderRadius: 18,
          }}
          className="relative w-full cursor-pointer overflow-hidden"
        >
          <motion.img
            src="/card.png"
            alt="main-image"
            className="bg-slte-50 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              layout
              src={logoSrc}
              alt="logo-lndevui"
              className="bg-slte-50 w-20"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex items-start gap-5 px-2 pb-4 pt-5"
          style={{
            flexDirection: currentStyle.contentDirection,
            alignItems: currentStyle.contentAlign,
            justifyContent: currentStyle.contentJustify,
          }}
          layout
        >
          <motion.h1 layout className="text-4xl">
            {mainTitle}
          </motion.h1>
          <motion.div
            className="flex"
            style={{
              flexDirection: currentStyle.infoDirection,
              justifyContent: currentStyle.infoJustify,
              alignItems: currentStyle.infoAlign,
              width: currentStyle.infoWidth,
            }}
          >
            <motion.p layout className="mr-6">
              {websiteUrl}
            </motion.p>
            <motion.p layout>{lastUpdate}</motion.p>
          </motion.div>
        </motion.div>
        <AnimatePresence mode="wait">
          {step === 3 && (
            <motion.div
              className="absolute -bottom-40 left-0 right-0 flex w-full items-center justify-center gap-4 border"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cardVariants}
            >
              <motion.button
                className="absolute -top-8 right-8 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  toast.promise(promise, {
                    loading: "Sending Transaction...",
                    success: () => {
                      return `Bond purchased successfully`;
                    },
                    error: "Error",
                  })
                }
              >
                Buy Bond
              </motion.button>
              {[1, 2, 3].map((index) => (
                <motion.img
                  src="/card.png"
                  alt={`card-image-${index}`}
                  className="bg-slte-50 cursor-pointer object-cover"
                  style={{
                    width: 220,
                    height: 250,
                    borderRadius: 14,
                    marginTop: index % 2 === 0 ? 0 : "2.5rem",
                    rotate: index === 1 ? -6 : index === 3 ? 6 : 0,
                  }}
                  key={index}
                  layout
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default App;
