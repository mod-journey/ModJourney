export {};

declare global {
  namespace globalThis {
    interface mjOres {
      mold: {
        gear: string;
        wire: string;
        plate: string;
        rod: string;
      };
      ores: string[];
      gems: string[];
      ato: {
        vanilla: string[];
        metall: string[];
        alloy: string[];
        gems: string[];
        mold: {
          plate: string;
          gear: string;
          rod: string;
          packing_2: string;
          packing_3: string;
          unpacking: string;
        };
        other: string[];
      };
    }

    var mjOres: mjOres;
  }

  var global: typeof globalThis
}
