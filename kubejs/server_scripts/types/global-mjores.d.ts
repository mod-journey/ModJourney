export { };

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
        vanilla: Array[{
          name: string;
          regex: RegExp;
        }];
        metall: Object[{
          name: string;
          regex: RegExp;
        }];
        alloy: Array[{
          name: string;
          regex: RegExp;
        }];
        gems: Array[{
          name: string;
          regex: RegExp;
        }];
        mold: {
          plate: string;
          gear: string;
          rod: string;
          packing_2: string;
          packing_3: string;
          unpacking: string;
        };
        types: Array[{

        }];
        other: string[];
      };
      craftingTypes: string[];
      excludeItemID: string[];
    }

    var mjOres: mjOres;
  }

  var global: typeof globalThis
}
