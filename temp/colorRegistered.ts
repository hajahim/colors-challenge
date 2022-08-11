
// Do not edit this file, it is auto-generated at build time!
// See scripts/register-color.ts to modify the generation of this file.
import { HexColor } from '../shared/models/hex-color';
import { HslColor } from '../shared/models/hsl-color';
import { RgbColor } from '../shared/models/rgb-color';
import { HexColorProvider } from '../shared/providers/hex-color-provider';
import { HslColorProvider } from '../shared/providers/hsl-color-provider';
import { RgbColorProvider } from '../shared/providers/rgb-color-provider';

export const models = new Map<string, any>();
models.set('hex', HexColor);
models.set('hsl', HslColor);
models.set('rgb', RgbColor);

export const providers = new Map<string, any>();
providers.set('hex', HexColorProvider);
providers.set('hsl', HslColorProvider);
providers.set('rgb', RgbColorProvider);
