import { _decorator, Component, Node } from 'cc';
import { TransformAdapter, PositionType, ResizeMode } from './TransformAdapter';
const { ccclass, property } = _decorator;

interface TransformPreset {
    resizeMode: string,
    width: string,
    height: string,
    positionType: string,
    x: string,
    y: string
}

interface TransformSettings {
    portrait: TransformPreset,
    landscape: TransformPreset
}

@ccclass('DebugComponent')
export class DebugComponent extends Component {
    private _transformAdapter: TransformAdapter = null;

    start() {
        this._transformAdapter = this.getComponent(TransformAdapter);
        window['debug_component'] = this;
        window['show_debug_props'] instanceof Function && window['show_debug_props']();
    }

    updateSettings(settings: TransformSettings) {
        const config = this._transformAdapter.settings[0];
        
        config.landscape.resizeMode = ResizeMode[settings.landscape.resizeMode];
        config.landscape.width = settings.landscape.width;
        config.landscape.height = settings.landscape.height;
        
        config.landscape.positionType = PositionType[settings.landscape.positionType];
        config.landscape.x = settings.landscape.x;
        config.landscape.y = settings.landscape.y;

        config.portrait.resizeMode = ResizeMode[settings.portrait.resizeMode];
        config.portrait.width = settings.portrait.width;
        config.portrait.height = settings.portrait.height;
        
        config.portrait.positionType = PositionType[settings.portrait.positionType];
        config.portrait.x = settings.portrait.x;
        config.portrait.y = settings.portrait.y;

        this._transformAdapter.onTransformEvent();

        return {
            land_width: config.landscape.width,
            land_height: config.landscape.height,
            land_x: config.landscape.x,
            land_y: config.landscape.y,
            port_width: config.portrait.width,
            port_height: config.portrait.height,
            port_x: config.portrait.x,
            port_y: config.portrait.y
        }
    }
}

