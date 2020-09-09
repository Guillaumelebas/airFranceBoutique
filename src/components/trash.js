<select name="vol" id="vol">
                                    { this.state.vols && this.state.vols.map(
                                        (item, index) => <option value={"vol"+index} >{item.idVol} {item.Depart} {item.Arrivee} {item.prixVol}</option>
                                    )}
                                </select>