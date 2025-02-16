import { useEffect, useMemo, useState, FC } from "react";
import { usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";
import { particlesCongfig } from "@/data/data";
const ParticlesBackground: FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(() => particlesCongfig, []);

  const pathname: string = usePathname();

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    if (!init) {
      initializeParticles();
    }

    return () => {
      // Cleanup function (optional)
    };
  }, [init, pathname]);

  if (init) {
    return (
      <div style={{ position: "relative" }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground;
