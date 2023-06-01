var checkbox = {
  init: function(){
    var that = this;
    
    $( '#list_products' ).each( function(){
        $parent = $( this );

        that.activeChildsByParent( $parent );
        
        $parent.find( 'input[type="checkbox"]:not(".all")' ).on( 'change', function(){
          var $thisParent = $( this ).closest( '#list_products' );
          that.activeChildsByParent( $thisParent );
        });

        $parent.find( 'input[type="checkbox"].all' ).on( 'change', function(){
          var $thisParent = $( this ).closest( '#list_products' );
          that.toggleAllChildsByParent( $thisParent );
        })

      });
  },
  toggleAllChildsByParent:function( $parent ){
    var $childs = $parent.find( 'input[type="checkbox"]:not(.all)' ),
        stateAll = $parent.find( 'input[type="checkbox"].all' ).prop( 'checked' );

    $childs.prop( 'checked', stateAll );
    this.activeChildsByParent( $parent );
  },
  activeChildsByParent:function( $parent ){
    var $allChilds = $parent.find( 'input[type="checkbox"].all' ),
        total = $parent.find( 'input[type="checkbox"]:not(.all)' ).length,
        actives = $parent.find( 'input[type="checkbox"]:not(.all):checked').length;

    if( actives < total){
      $allChilds.prop( 'checked', false );
    }else{
      $allChilds.prop( 'checked', true );
    }
  }
}

$( document ).ready( function(){
checkbox.init();
})